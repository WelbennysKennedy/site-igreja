param(
  [string]$HostName = "ftp.wekdev.com",
  [int]$Port = 21,
  [string]$Username = "welbenes@casadaoracao.com",
  [string]$RemotePath = "/",
  [string]$LocalPath = "frontend/build"
)

$ErrorActionPreference = "Stop"

function ConvertTo-FtpPath {
  param([string]$Path)

  $parts = $Path.Trim("/") -split "/" | Where-Object { $_ }
  if (-not $parts.Count) {
    return ""
  }

  return ($parts | ForEach-Object { [System.Uri]::EscapeDataString($_) }) -join "/"
}

function New-FtpUrl {
  param([string]$Path)

  $base = "ftp://${HostName}:${Port}"
  $encodedPath = ConvertTo-FtpPath $Path
  if ($encodedPath) {
    return "$base/$encodedPath"
  }

  return "$base/"
}

function ConvertFrom-SecureStringToPlainText {
  param([securestring]$SecureString)

  $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($SecureString)
  try {
    return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr)
  } finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
  }
}

function Invoke-CurlUpload {
  param(
    [string]$FilePath,
    [string]$RemoteFile
  )

  $url = New-FtpUrl $RemoteFile
  $curlArgs = @(
    "--fail",
    "--show-error",
    "--silent",
    "--ssl-reqd",
    "--insecure",
    "--ftp-create-dirs",
    "--user",
    "${Username}:$PlainPassword",
    "--upload-file",
    $FilePath,
    $url
  )

  & curl.exe @curlArgs
  if ($LASTEXITCODE -ne 0) {
    throw "curl falhou com codigo $LASTEXITCODE"
  }
}

function Should-DeployFile {
  param([string]$RelativePath)

  $normalized = $RelativePath -replace "\\", "/"
  $deployFotos = @(
    "fotos/batismo_elegante_poster.jpg",
    "fotos/busca diaria.png",
    "fotos/ccc.jpg",
    "fotos/ceia_vermelho_landscape_poster.jpg",
    "fotos/criancas.png",
    "fotos/culto-da-familia-poster-optimized.jpg",
    "fotos/culto-destaque-poster-optimized.jpg",
    "fotos/culto-rosa-poster-optimized.jpg",
    "fotos/igreja_apresentacao_poster.jpg",
    "fotos/miss-bruna-optimized.jpg",
    "fotos/mulheres.png",
    "fotos/musico_branco_poster.jpg",
    "fotos/oracao_branco_landscape_poster.jpg",
    "fotos/pastor-jhonatan-optimized.jpg",
    "fotos/pregadores-cinza-poster-optimized.jpg",
    "fotos/pr ricardo.png",
    "fotos/senhora.png"
  )

  if ($normalized -like "*.map") { return $false }
  if ($normalized -eq "index.html") { return $true }
  if ($normalized -eq "asset-manifest.json") { return $true }
  if ($normalized -like "static/*") { return $true }
  if ($deployFotos -contains $normalized) { return $true }

  return $false
}

$localFullPath = Resolve-Path $LocalPath
Write-Host ""
Write-Host "Deploy HostGator" -ForegroundColor Cyan
Write-Host "Local:  $localFullPath"
Write-Host "Remoto: ftp://${HostName}:${Port}${RemotePath}"
Write-Host "Modo:   FTPS explicito via curl.exe"
Write-Host ""

$securePassword = Read-Host "Digite a senha FTP de $Username" -AsSecureString
$PlainPassword = ConvertFrom-SecureStringToPlainText $securePassword

try {
  $files = Get-ChildItem -Path $localFullPath -Recurse -File | Where-Object {
    $relative = $_.FullName.Substring($localFullPath.Path.Length).TrimStart("\", "/") -replace "\\", "/"
    Should-DeployFile -RelativePath $relative
  }

  $total = $files.Count
  $index = 0

  foreach ($file in $files) {
    $index++
    $relative = $file.FullName.Substring($localFullPath.Path.Length).TrimStart("\", "/") -replace "\\", "/"
    $remoteFile = if ($RemotePath -eq "/") { "/$relative" } else { "$($RemotePath.TrimEnd("/"))/$relative" }

    Write-Progress -Activity "Enviando arquivos para HostGator" -Status "$index de $total - $relative" -PercentComplete (($index / $total) * 100)

    try {
      Invoke-CurlUpload -FilePath $file.FullName -RemoteFile $remoteFile
    } catch {
      Write-Host ""
      Write-Host "Falhou ao enviar: $relative" -ForegroundColor Red
      Write-Host "Destino remoto: $remoteFile" -ForegroundColor Yellow
      throw
    }
  }

  Write-Progress -Activity "Enviando arquivos para HostGator" -Completed
  Write-Host ""
  Write-Host "Upload concluido com sucesso." -ForegroundColor Green
  Write-Host "Abra o site e pressione Ctrl+F5 para limpar cache do navegador."
} finally {
  $PlainPassword = $null
}

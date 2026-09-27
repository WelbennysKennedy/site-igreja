# Casa da Oração

Projeto do site da igreja, com frontend React e backend Python/FastAPI.

## Estrutura

- `frontend/`: código-fonte, imagens e vídeo do site.
- `backend/`: API FastAPI; requer MongoDB e as variáveis `MONGO_URL` e `DB_NAME`.
- `index.html`, `static/`, `fotos/`, `hero.mp4` e `asset-manifest.json`: versão compilada para hospedagem estática na raiz do domínio.
- `.htaccess`: configuração Apache para servir o site.

## Desenvolvimento

Na pasta `frontend`, instale as dependências com `yarn install --frozen-lockfile` e execute `yarn start`.
Para gerar uma nova versão, execute `yarn build`. O resultado fica em `frontend/build`.

Ao atualizar o código, atualize também os arquivos compilados da raiz com o conteúdo de `frontend/build`.
O backend precisa de um serviço Python separado se for utilizado; a hospedagem estática serve apenas o frontend.

Dependências instaladas, arquivos `.env`, credenciais e logs locais não são versionados.

## Deploy na Vercel

Importe este repositório com **Root Directory** na raiz (`.`), para que a Vercel leia `vercel.json` e encontre ambos os serviços.
Os comandos de instalação e build do frontend estão definidos no próprio serviço. Remova overrides antigos de build no painel.

Em **Settings → Environment Variables**, configure `MONGO_URL` (URI de um MongoDB acessível pela Vercel) e `DB_NAME` (nome do banco) para os ambientes de deploy usados.
O backend exige essas variáveis na inicialização. Não coloque credenciais no repositório.

Faça um novo deploy do último commit. O frontend atende `/`, e a API atende `/api/` e `/api/status`.
A versão estática da raiz continua disponível para outros provedores; a Vercel compila `frontend/` usando esta configuração.

/* --------------------------------------------------------------------------- */
/* Inicializacao de fontes (Typekit) e deteccao de touch (classe do Webflow) */
/* Fonte original: assets/js/head-init.js */
/* --------------------------------------------------------------------------- */
try{Typekit.load();}catch(e){}

!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);


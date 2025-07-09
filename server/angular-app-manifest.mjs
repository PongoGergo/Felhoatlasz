
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/documents"
  },
  {
    "renderMode": 2,
    "route": "/faq"
  },
  {
    "renderMode": 2,
    "route": "/carrier"
  },
  {
    "renderMode": 2,
    "route": "/szamvitel"
  },
  {
    "renderMode": 2,
    "route": "/konyveles"
  },
  {
    "renderMode": 2,
    "route": "/konyvvizsgalat"
  },
  {
    "renderMode": 2,
    "route": "/adotanacsadas"
  },
  {
    "renderMode": 2,
    "route": "/penzugyi"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 92840, hash: '105fc989c2e1fe1c077747ca166196749958359b78184f451d25575eb0ad1ecc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '7065a9b48e4c8be1922b016dacbd76191b08831a5426dd7c4102f8812b5cda14', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '1220ec2da29b9927dcbfab27022fc5d946d2331ce8d449f23d11375f5d04ba98', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '0dcb3d36992405a6dd049f3c40f0d5b1933abeccfe39b2aac4ad1cb1e91c17e5', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164762, hash: '36272fe0b66682fe8825ac3f378a1d151dcd8fd395495c8b81e45f1c9437b11c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '99417752eef4161683dc08c0417196591e60b553913f39e1e7ee696ded437602', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '8550f44c1f54ada0ced63a15f7ccaaf56f249df8814611564d531774da6ba1ca', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129541, hash: '19b0103eb1b6d5be32da1ff293a9118c90672ce2883e774f6c22131d9fbed898', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: 'bd040e4dd45c9b8e7fac6ff391d4c107fa76e599288c34c18960413b046c472e', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: '49b168d2a09008037572f0396d868f0be2147aaad66e8a2e4f47ac0109e12475', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '395b6bc6017e555a173658807e3c2501d335d0584e912b128f26ccd2a5968add', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '838b990c1927a778ed1a64ce153255a870df2c6413fe50bc0dd46243fa0f4028', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: 'cf84d976110d9a8be6437a08b739fa3fb66962bdd637da85dfe86c8a4854509f', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};


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
    'index.csr.html': {size: 92840, hash: '2ff653c4d2aaa3875763426f83a208d39c06230438e6d2869b99a26c9a79c073', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '890a7ee095659b9efaf6d4d6fc4b3a7929e68d3664268d1477a6e1e3d2350624', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '247770590ef4639268f1e9f543c98048d8d33fa9fbfb9ea1d418f807a6391bf2', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '249283de46a3172b74f1285ea0005a96362c13001ecb7bd21c0b118e71afc305', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '64f786a6371bc06db3c07ebbf86ca798e6c7cd1f17cea809b8cbdf6713f9be51', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164772, hash: '891c6138d6cac5c785c804a791c11faa2f9da4a9ab252d8517e5d16ce42a0560', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: 'cc998747e0508f290a2a1cea45b0ed04127d7d3605060a415eb4bfcf266e6017', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: 'fbfd86a8c0f9cffa2f0d4aa837bd78bf1bd34c03e13a9a96be55e5eb40c4079b', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129541, hash: '10bd48988f9be5908d30f7c2eedf53364c54ed1c3cb2804893b4aa2b8762120f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '5ccd3935d2a775c00146443174a82067a8587bafdff879f61cc03b5952f12fcd', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: 'd82789ffc46d9f4e84cb6adbbd543aae1d468778ba40e560e84301472c6357b3', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '270d69f124f414827eb5138912fcbe68580363536d5c91af343b997f3f679665', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '6fcdd2032673cd77ed0af8ae8e46c450f9d64ab18cb918de93318853aabc518b', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

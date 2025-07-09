
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
    'index.csr.html': {size: 92840, hash: 'ede6de2f31554168d29d7918e4d97d5fb3fa1ecd5cd8388d854c6566b6e97f02', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: 'c04a73d6f188bb89c6fca7f80900f38886964eea32d3250f6bc3a3d625d15284', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: 'f0058b3e5233422250d251fe55ff92c4ec6652824ceaa743151392441c547f80', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '50310d1c4f15af8f05ff35108e1baad6538009a262e1d96b1e6ecd0c632505d0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164794, hash: '3535498ac5330d09da8e2b3263caf890edccdce5564f7e953e009ff5e13978ed', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '0b29aec2073e0b779afafd15ccc3b6d2fa2511af26f2f56a59a6a824877803c2', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '063c0b9c975e3cecd74d518fb950814f49eee2823dca291d3ab8a294254936e7', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129541, hash: 'da571c11a3ceae975ab6c0650a1f96f66f4d5fb6f184fdfd82500d4c604ff1e0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: 'fd5ba28e12d62b373142d1ade2aaa703c0a721710d07978be968ec04ad6bc26f', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '018e60e2ce1ff5d428b4c27c6af3e80f1ac842a3f94159732359cf36ad6b394e', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '2ca01d85e262b02e2fffeada91652393d1e354424b0397fc1a5b0284b5349818', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '795ace5c2bfab57add4123f7944ac80321688999697b1adc1498f4177616393a', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: '0e0005747113b0e1048c0294621edd63760dbbfa0fb205d5589d9cc9c9e7e2f1', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

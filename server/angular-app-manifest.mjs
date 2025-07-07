
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
    'index.csr.html': {size: 92840, hash: 'dafd01bda690a63630a4a80a8ef140711ba2c4ed345c66947dd5d4d90aeaa842', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: 'c23bbe476d469a30dbae72699a0dae6177a41780e8da8ca2017f72e854f81910', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: 'aedf626ade5b985eefba86cca469b956a7fda0ba8bfaba496f3d19c17ae9c56d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 157008, hash: '3131d0d66a21f662fcf2d10b862f37b734baff138c29caeaabd021911ca71b7a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: 'b11723ebf8f1eac3fa2a88a81ef3e8c71ff2ae8b9bd7ebf8a7bdfef370381fbb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '87d2b13457a2633ffa67912ed64276879ad135eb173447bf6fea48695e8dc5d2', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: 'b245e16dd3345f8e249fab9d887835f9fcf1072d67fccf6a18c7e16bf8452f45', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129947, hash: '8a11b377240151c95e90c7cd3a73fd4040390ae39b2f1b8fd6ce79f83e9a3484', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: '664ae8595ab877a0b1158314a81df9406358aae6e6bf9af0569f6cd33dfc011d', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '9768f274dcc5e0ccfb1e3c9ffe567ba81846e4f2add0b9f7d21421db870f0f2a', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '40a5423caaad37e3942eb94cc89eadaafdf3646c8326d97114aadca25a0ec1d4', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: '7e935eec0d961e775314432681a69088f37fe8b3421bb0cdcff24d5c30ba0880', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: 'dc69638f08a2ccf678049ccd6d13f6140f961cf7cea9956caab998308e370205', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};


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
    'index.csr.html': {size: 92840, hash: '9294d061534cf1e4ea42d19f39901bb5c75dfe6296091f0d378d094433d4bd67', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: 'c9e9c30c57bb828ab157680b516c67b4f9a8d519b1108e29055abb38a7c4fb1e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '1d139540c160e631a0561b01c15105b9e83009a76c6a67a501d0b7780013fbef', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '030626b2589ce481f2e7a0775aed8ea6eb7e463d92824dfd619512ee93a52b97', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 157008, hash: '9a0c15adafbb40e22a07b4977613d2657c5d44d7c80f547b49cab079c0b28988', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: 'ea5af8a76d1fc8f6110af1c07c97072918242002a400a758af53ead5c0eebea6', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '2de4e1931ea8fe474e77996ba5740e0f88d8d979d4c09b6b2804ea7ff356615b', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129966, hash: '140da9399663a0b100f7e56273505d1dfdaf1bdb81a968ac7b094a01d7bfc0c4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: 'd8504b80288c840c7e03ac4a31e04898bd3ac37ae362f967cf8352b8ab37f64c', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '1a9c5e89cfb6faee8cae45f2d1cd406689ca5941632a714a92f54bd9a4fa3bc9', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: 'c59dad5c66efbe68e9edf9cb4eb913cdf4391c3dca5d515599c55f8ace7d619f', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: 'f7af9b298068a55f3283c8d7a6270cb499bef439266603a1c04ce5360362e4db', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: '3b6982bcf3eb8f17fd579bf95c539e282c83eade3282f1b1e1868955ab298461', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

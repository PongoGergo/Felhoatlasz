
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
    'index.csr.html': {size: 92891, hash: 'c88347e0b3fb384276154edb07fc718b0d093a982d5c87438f37dcc81b7f2dad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: 'fe587630bc22d2f3ffc8f5221fb8919c6a92f700e0e5ec62669ca5e807f0daff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 149066, hash: 'f1f5e155ebe68c226dcca427abbe329145720db8ea3d605178440bc473359f20', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 165758, hash: '2e73d6f008009df4394ec4e58213a5995213683ceb00031e316c671a9812ce8a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 146281, hash: '9f53b452d75c6c7469591a66f69812e2bad9666330147eb3aca464691f89ad73', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'index.html': {size: 246009, hash: 'b42bf0e90e6a0ac2ddae04f323d2b65a8504c11412c8ce4f3828c5b297ea502f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 145149, hash: 'b34ba04844f19af09025cd6b8777e0e234fb56ae004d4f839e2c1a165a6bec7c', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 200488, hash: '74faf8291096385950de55d0a7ba56ed029cbc076b7d9ce6abaacc918b805994', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 146315, hash: '51f5a7de23a8ad98b2adf29413e94f4be8c6ca004775f5e41fd77789133c1a07', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 145133, hash: '16720405cc798cf6c9c8ccd96c29f92943795782f9e754b1af68c0275519c5f0', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 141342, hash: '9a5bc31048262284316f84b5633197e27e13d07561ed6d94dd64fadd5ae62e0b', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 145208, hash: '629381260cf8b2eff37d6aead082986a38c4f2ca04eb0dd1ed077cd15fab0401', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145611, hash: 'beecc358434addc7acdb0f6422ca807aa74ff5c8cdfc9b539843da476e8e71b2', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-MQP2LRPG.css': {size: 993138, hash: 'aFSAc8NhtQU', text: () => import('./assets-chunks/styles-MQP2LRPG_css.mjs').then(m => m.default)}
  },
};

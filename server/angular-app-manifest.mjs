
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
    'index.csr.html': {size: 92891, hash: '714e51363ec1b5f3cdf79989b6d7e58dcbb89e866b9af8e1da3ce1a7cd25e841', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: '7ca0908c25e61fac1714f5643bdb81607d3c8634befd7bc289ee142ace48ca1f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 144318, hash: '4f7cf920cfffeeb84b69c938c2c60cbfe66629501bf8542eb072e577ad68a25e', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 148640, hash: '46b2bc74bbe3cbbd969ece1c1a479d4d5280e717baaf38c0027b7cef401a8dde', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 235936, hash: '7d119c03cc8f11025c474461119c05e7d7d7dd9461d6fb56d3054cb864d000c6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 144078, hash: '36d2c6818510413be18bbc5ac6837c79eabf471caf9b1652ac7cc6f52c6f270c', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 145031, hash: '2472fb213887c1d09f0993478be10df7f0ded6f59ec69da53ed55cee26c69ab3', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 164400, hash: '449a33e6b00ce346273025d8dcde21d711647435404c92fb8814febc07ec15d5', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 146176, hash: '3ba8abf6179dfd62ea42ab7e0c155c4e1c7d81f5be3a334b55fa24b99424b2d9', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 201389, hash: 'ccf4f671e045f7fca1a079187ca8820b18b9629effba8ba3ea7dfcb383ee568b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 143514, hash: 'dfe00ab8604415840fb29a37a29f5c00dbc80e00269acd53d62d9a5dc17107d7', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145551, hash: '575e9f09ba534ebad767f61b65950f6e26f1ef69b0abe99d2779f175e2d64a12', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-VQAQWQLG.css': {size: 993860, hash: 'QO/1aDeSqug', text: () => import('./assets-chunks/styles-VQAQWQLG_css.mjs').then(m => m.default)}
  },
};

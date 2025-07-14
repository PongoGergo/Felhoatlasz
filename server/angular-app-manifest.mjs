
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
    'index.csr.html': {size: 92840, hash: '627e27f3f5389214d43fc23f865022b5c804ccbdc60a731f795158cb2fc59bc7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: 'f8dcac8ea2260ed33155bbd3c9f2af004b6dd31c05812786632e008980e8a34e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131549, hash: '4f44b2c9012fbf2de59a2d8627b2c139778d82f73b6b3f0d8a6de1b35e3e2e39', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164790, hash: '5dbb0ad5ccba2995029c1a2e4a3553002cc46294f6af23ab5903ebadfda0d1c2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 131550, hash: '26bf24f90f25d44c3e06014bbc661298cb32dbc222837e5a990c0639435a4e60', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137796, hash: '81b65440371be52f21a89f2bb8f67828f30f3fede1fd29657153619354f767b6', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129591, hash: 'b3aab7446b6c0682223a9525df4c5942a1d1732214fe71f82a9dd4281921ee3b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137823, hash: 'e6ca18230e1df1e02e50489874f9fa8c3a2c6144d5ed0f39991e71ec09751b9f', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131047, hash: '18a6d73ba30e053de74f9ccacd148c3a909f42302be603e39e400a7b0cfbf85d', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 122528, hash: 'd2fc37bf106f40a7414588c77338e41bef397e8be365de33ff04ebeddba60730', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137825, hash: '0433b5bf1a23e0040d22c8a38d3d31c0b8074211ceec279f60889e5afc397fa9', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137787, hash: 'b5b056e5aedafd00ecac45be1b18ec1bc80751d5555377bf8889cc4aa56f32d0', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127450, hash: '65f6625d66fb503211de142537dc9605d6287879fa6bb40673c8a3f44e434e70', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-UFIRDPTN.css': {size: 992600, hash: 'G8UW9kw+WEA', text: () => import('./assets-chunks/styles-UFIRDPTN_css.mjs').then(m => m.default)}
  },
};

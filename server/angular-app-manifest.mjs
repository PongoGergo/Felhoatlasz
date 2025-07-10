
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
    'index.csr.html': {size: 92840, hash: 'a4f319b24156eaa1238e2efa8029d51897e022aa960ff7923fc73e0ecbc88e5b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '4e9efd8f365aa74380a0b041f4653efc470cc237dd5f948b99697b77c810cd44', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '4343941b88b5f69f50efccea0a139dcec9993fda6501a946a18ab46fcea39338', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '5d8a7499e0f6061115edb95c17041a25201c7bb9e46a2d27f130b7e70a4f0e48', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164900, hash: 'f43bb61e47337cb4d76d25ebc0fd7e30a536e981126cab601f33427519becf44', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: 'f21710032430dfcc284e4c143a8b3e68add55589ce7dc6e3488ff5eec6dbaf12', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '0d86bffc7e8707589f9d3aadf4b3120041a15a323d3b45763f8316275f7c8e27', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129619, hash: '45c6cf0acfa0e79bb34d8dd1a0b7ab578d8b528ec65f0351627a2592c215ceca', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: '9446d59881b7e8fab23b44d9fda6322bbf5b8996cc1b19d74318e31626cc4da1', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '383025694bb9833b04b894198725a452783334069d7271278680cd537f51f01f', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '01693b72396b1b36fd40f7b0321afcff0439a04458a8f82f554337d50f118a03', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: 'efbe8bed048e1cbe15863094ab436fcc01702ccca9c0f08421630d31895dbccf', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: 'e422ee237ef5a575e9c1305d957b0750f7559b943d7e6b0dc3df10d55d555775', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-7QKKW5QS.css': {size: 992569, hash: 'UioBWM+Dies', text: () => import('./assets-chunks/styles-7QKKW5QS_css.mjs').then(m => m.default)}
  },
};

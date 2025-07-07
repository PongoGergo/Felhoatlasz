
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
    'index.csr.html': {size: 92840, hash: '4fe39c49787b2b03cda9d96b8af61b0f2419149f32450b4130e29f4748188748', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '3af7beffd396d881f2586c69bfb1547595a9df3f0bceab141d4dcf06a11a3357', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '55ea7b53066d41ab9eed958f5cfbed3bd65b4e18a02e87aa9bf971007f44739f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 157008, hash: '436fbbb986a8f016e9133f9f9a42b2af5f0aba80d00ea6c2a2605fb618fb4c28', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '8f66e65ee884cea93a3c24fd3f5202e6d370d9566a05e4e0beb752d9dc5c7b30', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '75fa7d6e0a894033cb6996021543d6895515cf4e0cc54ded5dc1fe1d31a437f9', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129546, hash: 'f3f97c892f587e041bdfe2ed68cb657ceb6c1fa48372a62c4dbe82868192caa9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '00ecb98e482dad3879a30e14cf6a45a7b0e3b7e57dfb2537aa8a7777b66d54b8', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: 'f0c9a3b910a074c4566ede5c55620f12be615fa36c94a068c5fe491e27652307', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: 'b82c045376c335049e01c1bbf35115232c16b0b7628e311e199c44dc783826e3', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '3f7766182161948440c8ebd8dfd76216f8b881de611f57b31a0dd5c270d49f12', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '109d212d9c3e4bb5aeeda89be2e7764e3a68d2b415469bdaa763a010240e6611', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: '34c1a08ab51dfd3ede27974e7a6ad542b3f9bed38ac6f55d2aa9f9c4c18468dc', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

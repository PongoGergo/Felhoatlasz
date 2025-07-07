
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
    'index.csr.html': {size: 92846, hash: 'a8df0f9df2fa201fb035b09790067202c065fb012e64e0bd62efcff0868ffeb3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1107, hash: 'c280e9b4aa6491ec0c7aad34e5cdce53d266d11fe2e3fe6481f56131e87b1605', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 134130, hash: '0c20a73778f0efe052b651aec9eadb3997435cf51f2dae4f461aa889866f9260', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 143391, hash: '0a8a557c5920c179e3a95f7e3077c715a97c7825189f4a0b9a8ad5f7222fc0fe', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 158784, hash: 'fbf3592b0d543248abb1dac45d67a0b1523d3042106033f846b30ce6d3a4dba2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 140044, hash: 'c629cad6bc004eb3f0fd73cb680cf344ac17ec6f43bd3a5a9090464f43e310c7', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 140051, hash: '7ef18419e02c9187256071b1a0cf5859189821c5742e2f90a8e30ace5e739bbc', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129575, hash: '732a51924ea5ab785e89a987122f5f378b104fbd9f7d9f9255939409ccefc6e7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 140054, hash: 'e7c614de62258ba9ea329d032b68bfd9f9f53b96bda8db1d60576992004c9372', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 132500, hash: '5347ebfb4d1197acf5728086567643cef257a322ec01b08ab5fe4e37092da48c', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 129800, hash: 'b6282c387dc8d7751deb1e2877b074f680765369d52af2f11c6315d5c40d152b', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 140042, hash: '309735514d6b14ccb45ce1e4cdba3087c90595167cce4acb94b48e9576859a07', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 129999, hash: 'c04abaa9dbd3f023710cd2767b126d031357b4f2913b047092f96cc4f8843ba8', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

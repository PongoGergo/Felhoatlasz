
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
    'index.csr.html': {size: 92891, hash: 'bc29af5d603b0457e0b9538869ff9b8d171ec4e2a012bdc8a3efec1b30263bac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: 'acbca675e3cbbd835ec395f9510a2253615018442a4214ba74589dbce7a5b759', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 148853, hash: '5b02b4e731b32fbf3f03b03082c558b26ea5834ca7aa46559c81d9f518661a5b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 165545, hash: 'a1ff1e2cb8da71324a0927e165ad1485011f95ea97fde3fa9777f563323ec4dd', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 182989, hash: '15e1140743de56d1da3838b88aaa372cfbe0c62419a8d9431c1b3494e4c9cd24', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 146068, hash: '5b74b0d78cecfb90da20ddbb93b8f26ad60f7221c0a5eb9addb236e1063b08c9', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 144936, hash: '80bd70b3fe6807528d88247b6cf43d790bd8db9135aa68a2e5ad63d810606025', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 146101, hash: 'a754c6d9dc1f435c4e5629e396223aed0dfb226c856ecc2ea20863cc59dc9ad1', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 147538, hash: 'a8ff5dd32d673f53db03ae95f8be426bfc6b1738eee4cb58b3ebf0cc3a91efaf', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 144920, hash: 'd1c4bb49129253d67927656eb499b7dffbabdced728dab45e0660bba492bdee9', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 141129, hash: '8199f08200a4a5181a3d35152278a91998d787c3cf8cd7c22c2b08fa1e9b22ce', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 144994, hash: 'ac844f5514ec0f203ac4a3a39b3e78982b118fd868b82ca1028ea97ba118027d', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145398, hash: '12d2997bcdd29b2d96d159857cfe2f701b05c6a6a9355f8e77e09d50c011e5a9', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-G673H7ZE.css': {size: 992986, hash: 'rMNdursB0mE', text: () => import('./assets-chunks/styles-G673H7ZE_css.mjs').then(m => m.default)}
  },
};

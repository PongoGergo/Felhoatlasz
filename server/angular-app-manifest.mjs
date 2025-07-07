
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
    'index.csr.html': {size: 92840, hash: 'fe7216b877163183444513b78547c611d2063cd6247c4827ff1b2d534ca3969e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '7619d8278a4bddb559ecb20afb2b26c90410ac6ee97450d15b525587242acfe6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '13dc2017b3263e73397874e2c3edbeec15f568b3477c13076b59f930fbb39e1e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '759bb4a17f0443c3a611c9cb6cda4130d59d65360fc96781ea66e0de9bfeeb67', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 157008, hash: '144922e25e45319af20e023ecf9c8dd7e40affe73663999ad5f08e2596e507e2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '04558cd1d1873829d940515bd4ff983ce7e5768015d9b912e2c879fa6ec85af5', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129320, hash: 'dd5fd7b14b27e2634893994c83ebece0d302b343c1c377510e5fc2dc8ef1d259', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '79b45323ae64ec17208f05200acc4f194e697b512c68d79b4de48004fb468fff', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '22306b4ce3261a502c6409daab0ae14e9c9387f601119d1af63396f44e19c296', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: '9be905feef4e904467dde54007dbc9c1fe321999cbfea37bbde4911e7ece2b5a', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '5cabb730eef5230ededcefa6eda761ac08755d05745a4612bbbffe1e3d4a2e35', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '9cc697f66aef524682774ec07004a12981af290aad31f6917af8bfaf63cfac4b', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: '08a9cdf1eb92fd554e311b3ddfe65f3abbce471b38ff238930edf86e26f90ae5', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

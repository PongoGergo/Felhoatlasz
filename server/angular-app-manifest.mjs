
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
    'index.csr.html': {size: 92891, hash: '654408550ca7da3182521717291e3122df7fb4058b99ff12dba617a4411bd95f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: '0edffe6bbf5f1edc5f0508039cb1d5869999e11b86ab286d8acf82ac4ef21765', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 148440, hash: 'aae404bc14c01e15fc14511b069069f40e0169bf1effd972e311d23acde6a3bd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 144010, hash: 'a627e0326b67ac833116c71301d9b9d4bb3ad7dc473ea7bc4f0d64bc34fd660b', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'index.html': {size: 198944, hash: '31aca27bb9516b50e503fb8156429645bb03688ddfaa588ccbeff631133f86fd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 144831, hash: '976060d048ba2c9c39977f47def95f4fd5dea3d6c90bd3700bf58cee5fc35143', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 143878, hash: '89266945a4939ed45bec4131ffa9932d3aa193395053287b02bf404dcd847f59', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 164200, hash: '5678dd78cba8d65019301269f5a6c0026f03cd9dd2d9b6b3b980ea5b74bb86da', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 145976, hash: 'ad0fd76e3e5c1bd363c64e0572300f67e8381dc3f16390df98b8935738ccc215', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 164322, hash: 'e55854d253cd51fccbfa1fca6ab27b0e3f066dac6f2a3b22daf5e827f1bdb31c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 143314, hash: '2382326b1701fd731843d5348da2faaeb649f6245f72a93f5ca4e841f4985009', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145423, hash: 'fa8dc7f0c61fa1d10808f924fe07d9270e493c4827b8153177ae4b6cc9847e1c', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-XONFNOCH.css': {size: 994090, hash: 'aVeqg+90CZk', text: () => import('./assets-chunks/styles-XONFNOCH_css.mjs').then(m => m.default)}
  },
};

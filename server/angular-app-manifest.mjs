
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
    'index.csr.html': {size: 92891, hash: '60943ef034ef68eb116f2a51a2c68d21fde2f5d7165ea936d7603c027bef2584', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: 'eeeb0dc54dfa6a441f3299b41dee2c97e3745122110e78986a24ad40e4f2457f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 165545, hash: '05c36b22c0f40df24393ffa4635d7e33462f93555fb6f8535e474b54dd72d59a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 148853, hash: '1d75e95de728dfbfab307cef8759ccd5687d1caae1853e744e0e145630dab261', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 146069, hash: 'c9bdaf016a0fff37b378ea1aca654ae6e2fa650fce412bb74591f3afc1b15a35', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'index.html': {size: 195233, hash: '845431e0f4217a61384323ba686c630b1aeddfab650a07149e3bb22514cecaac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 144935, hash: 'ca555d29e7434432153cc9a2d33831a80fe5e2ef78bc0fc3cd06ece0d3877200', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 146102, hash: 'c5effe3da1ac060e5476ee60997fc9f485cd3caec99ff58495c11fa858f0b390', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 144919, hash: 'da853cfd4b1ffa54321a4ce8e5f6aa8a5fe1e9729ca11388934662e3e0d18e96', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 158334, hash: 'acc61247dd0bf74f029228c624d7c64de5462986ee9706337df1e900ddad5936', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 144994, hash: '059e72ec57fe901b14d6f6cf8ef8ccfdfdcf8eefc81e3f2e42883c6676d3357c', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 141130, hash: '7c7bdb579bcb68fa27e3dca4755cef72c3c91627ef7f08ef09ded85a0c05fd2d', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145398, hash: 'bfdeec05bffb64b31052e0f0b1ad83441a5a4c0a1dfeb3a5afa0072617a8c58f', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-G673H7ZE.css': {size: 992986, hash: 'rMNdursB0mE', text: () => import('./assets-chunks/styles-G673H7ZE_css.mjs').then(m => m.default)}
  },
};

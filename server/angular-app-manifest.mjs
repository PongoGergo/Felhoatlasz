
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
    'index.csr.html': {size: 92891, hash: '7c491fffe083e1d075336f4d7877ac523523a8e1df7df3ac5b506acc6c22b712', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: '472da2653b9687eda143823299093757b1b61139415d736a7139e089ca35a9ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 165991, hash: 'a054243e07ccfd96a58dcd48ba9896a28acd9049f1becfa157e72365624019f9', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 150004, hash: '6294471cf8d1b25a191a6cff256dbf53d41347f510ec90257bdd22be63a1ebbd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 146515, hash: '7940d0ea877ba3e6d972edc2edfad4486605460ba20f9b2633fce14deba19dab', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'index.html': {size: 183244, hash: '4bc93f72e199b7f46082452c7867646dede43b2ae9ed4a09ff1474a37a5d2e27', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 145382, hash: 'f57d7142ef22297ac15bd0eea979cecc93527f1cad8b69fb90cc319f0a3a9712', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 146548, hash: '87197a48cc75ef92cba5dc1cae9e6effd4a8efa772e4aeddabd271508ff77bea', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 147985, hash: '8f0c9b3be8d372ea032ee8263f64100d04ece4d6a50f3caf0909b1cd08b3b414', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 145366, hash: 'b35f321cf951be46c672d7708d09964834e668bfed4f43384f8c1660ae24d13c', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 141576, hash: 'ec5138a575bccf40c6e1c32c10a8261409ee5d5584e6e133d102567469cb330d', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 145441, hash: 'cd64550ecea434a3faae9e8158585ad431361662995590b3e0664079b8513511', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145844, hash: '06ed3816a80211db4405b61916c949059aeaa59d532a517a1341a9cc2e02edc5', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-ISLHFUCO.css': {size: 992663, hash: '9NQU0uhpplI', text: () => import('./assets-chunks/styles-ISLHFUCO_css.mjs').then(m => m.default)}
  },
};

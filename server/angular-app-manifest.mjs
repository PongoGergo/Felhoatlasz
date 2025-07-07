
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
    'index.csr.html': {size: 92840, hash: '71395a1d06ad669f8fdd269a5e05da0718fb7e9e27753d55482ea1ba20c847a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '57059894e3b3383f0f13f4fb741c133daa0b8369339dfaf504233cce9f3136d0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '3c2e9ac38ffcc048625dfa00b7305603d60c55b8af71abac5b9108fff3acae9e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '20b39a17961e55dc0e8ffa0edf25564eb99eacafe6cc1b2873ef49d347acd51b', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 157008, hash: '84faac8d8eb80a96dc9ad64a678f808eb621d462ed93749833c8c7ef6688aead', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '59b71c23779cbd6f5a6545980b5c846c1c021dc1185f21fc9aa111f1329367a0', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129972, hash: '40e5e0a75ef7213a6d4e1116bede37c2e82e16fe17f775f6ca9159809f49d21c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: 'bf7d1386d8072d863bfacfc85e7ea84ee44d1c25eefde8de7fb554eb2530ad86', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: 'b16e5ea9f2ba9cb65de37da10e5602f43876d3a63c7a8525dab3867572de2bb8', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: 'e22b4a705f9d072c14984d741f18b9a090e70ecc7b83794e40a3d0f21af7bd1c', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '2f50577ed7de227336541de9afa2f94dbe61925715ec6108cbff5d3a366fd52c', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '40d7c07d0200cd55dd88abe6fb189aed408dbc1afe11983689f29cc05fc5dae5', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: '1c2a139a26115a081a5545090e154f8c86fad5894fb157ebc5adca460a221aa9', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

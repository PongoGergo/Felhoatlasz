
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
    'index.csr.html': {size: 92891, hash: '3b94b6e11c6a11dea19ab9f3511b6412147675e589a6de70e0789a9c0cfd9ce6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: '64f57fc87312134b8e194826c193594c4011205344ddc05d8d85ca29aade413f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 144010, hash: '3bd06dd854d5eb5188cf7884f5d6f8b5230965f0cbfe0db3b6be2abfeb060aee', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 148440, hash: '74b434d5c3aae0d1079360ab6315244a625f70d7eed73677db3169d57dda15cd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 144831, hash: '3f6fe4e1282e05ce762a299e9f60389536adb3b8c7d0996ccb34b47c3b467577', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 143878, hash: 'b8c1942901cc9dcdae45aa7d649d93320d47802cabdf03990bb42a1025d684f5', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'index.html': {size: 198944, hash: '95aa6ae96c04e602e53428e5f2b4bb295e930a4cfaf37b1f1c5274fe83d83c51', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 164375, hash: '36a6565ba920a9c87b13d93aa54ac9514741927a0db17bb616bb96ab44963c5e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 145976, hash: '1264c71f8f7e83487c358baae16c57d9c0f504eca06409b995651fa48c008760', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 163539, hash: '7bde88b5b4bf10e710b0aaf8a26d6c0612992ca92c5c236b9bcbce810137bb88', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145423, hash: '2b0a660e39aac0f45be9f78bccec53a7827311779101d0155845f70e0aae6792', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 143314, hash: '2e3ce244024f452778060fb6f36b4c81cf4c76ef6e14710a138c07d9af448bf3', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'styles-657YNVG7.css': {size: 994123, hash: 'IjJ/p/Wv0Y8', text: () => import('./assets-chunks/styles-657YNVG7_css.mjs').then(m => m.default)}
  },
};

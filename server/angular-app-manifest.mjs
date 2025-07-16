
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
    'index.csr.html': {size: 92891, hash: 'dbe7258d3028ad90a70c941f7bfd7798019af71039e530365123716b4047892e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: '0ff9d974045df7a9326af45fecbecde0483205053a51f9f575a5667c4d13e799', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 149557, hash: '82dda89a2ea529b08670d7012c0dd068888d6aa17ec944656e72e97164912f44', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 165545, hash: '67fbe1e66fe2d20b837707790d86f3311fa9b9fe38b7612f53e55e3517a94c5d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 182989, hash: '556cd6a0a0001a1582d9605b773107298cbd842d4ad0db3a7c8957820e80fe48', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 146068, hash: 'd7ba404a85132aa8b210a566bcdbb23c20318a54c8295cfb3af8236653b481a2', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 144936, hash: '7176ee7d913f367e39868466b1ce765eb1d0b8fc83e4c0319ada31364aa2b0f8', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 147538, hash: '92064ecbe4653544977d12cead82b87132cc84a13c2fd6ecbfc9eb6e50a30761', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 144920, hash: '976fb0c127b20b7f5406978d44e3bb56b0123fbe81051b02bccba92eee9df4fb', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 146101, hash: 'c1792d464bf9815a409ab2a8a8270ee4f164149af764c4fdad0b019b53f561b8', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 141129, hash: '9304a5fe0d00e43fc147882025e7098d37bdf4780cca667310b9dc81e5e5df6c', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 144995, hash: '3778a8af93e0771123266255566fc91641c13db9f1638bf69f2afcd529ecb6bc', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145397, hash: 'a9260ab2ff22a1266b37561c4c2530ffc8ebc55cafa72a1d7c525339a6ee491a', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-G673H7ZE.css': {size: 992986, hash: 'rMNdursB0mE', text: () => import('./assets-chunks/styles-G673H7ZE_css.mjs').then(m => m.default)}
  },
};

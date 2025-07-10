
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
    'index.csr.html': {size: 92840, hash: 'f9ff53449539e6993799c239203a767766c6d1fecedbae59e7660a36e9140887', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '5a2d4b57e0c6194cac51ef7630b5023da3e246dd02f2487d17751ebb5aca02fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: 'c33de60b5e5ea80136e9ce1cabefb28c8cd4fa8e114ac2cc756c20351c045e18', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141084, hash: '8a9112e216b0519fa4601d5b2f1894d70400a22536194d0b58b3316c46341054', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '3a1388232e3f2aeeb6f7d4a66f79b1f5d73ca98ceb37b84cbee0a62941abfd44', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'index.html': {size: 163486, hash: 'ade83a07be024238601d310c28cbff1bc1867d9f845447e7ac56b441c1bbea36', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: 'cbb9bb2156f3307dcc33dcc697a7f391b1abb5d40991b71231e2543eaf56b73e', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: '30b10fbb4bf76fdbf4e0bd6d75af0664e4a70ca645cbd712370bcdb34ac6051a', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129619, hash: '713dc8014b0a0ef9a9501fd766a82fbc4664e29760d779df89da6815e026e314', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '96aecac20e20aa016753e5e2dc0156328f04f8e004d662b54d5b63c4fa7d22ff', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '9a0fd038c541b18a87dac16ba9a1cece8cf0dbdc89e16a0dcf22c0dbb2a3e3cd', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: '7b36c9b747319d3f2986d2e3b5fde26453f9ac9cb3f474bb4c7a6e6a9253b0b2', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '3d629eb60ce4ddd483f6c93e3646f2c9b38f2c3f74f3770312e4da1b9b0a964f', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-A2NJT6Y2.css': {size: 988854, hash: 'JI4MvfDwek8', text: () => import('./assets-chunks/styles-A2NJT6Y2_css.mjs').then(m => m.default)}
  },
};

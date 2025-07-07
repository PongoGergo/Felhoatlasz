
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
    'index.csr.html': {size: 92840, hash: '2e97a14048a5c95aedb1d94feb7e8ede94761c52d363249368071e8468dc31ba', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '5fa1ebfc61d0e9fa670156c251c8f4b91b53584b5caf0619846229ad56997963', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 134124, hash: '6d1db81ca3b3abdacc52ad245d9a5c1b65895aafe424cadb0557763c981f87fd', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 143385, hash: 'ad332c1ee48c3e8b868d26817a0493e04facab0c4255ca28cffa67c4be12397c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 158778, hash: '0af1bd639c06cea21fbc2379be97f9a8a78537b69554101a03d42a0a9ad3d678', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129569, hash: '4f7aedae879ade9b6e8750f6e5c7b18bccb8bc37b712b18334c5d0490aa2957e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 140045, hash: '3bed09ede736e195ac2c28d2b6f2e3a00fb6c7ef615121d9337c97320446b2b8', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 140038, hash: 'db86ae3ee78fa06cbbf46b471bc6d1feaf63d26b56e75c022168a1e8242865bf', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 129794, hash: 'e4bdf85502eb89e5f05081c0b17aaccc527318db090d75ed314b565b69ea70be', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 132494, hash: 'f316eb24a971ff8fb046fe690a8ef16aed7f7045661a93dabba2ac454020ce83', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 140036, hash: '2e07abf23f76fb2a059977cde80556d0944fc5f8e4f2f85cc84dea618bc029d7', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 140048, hash: '4056c746d3bef44e107743d479de884d202b3e6ec5a82a4be7359c2c0476dc03', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 129993, hash: '5a205348eeadbc72dcbd381433fa7c009594476193e1ec3ef49ad13dcc528ae0', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

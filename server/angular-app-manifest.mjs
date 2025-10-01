
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
    'index.csr.html': {size: 92891, hash: '1ad5a54a45325d74659aef62984d4bef854564351c3860110c908b0aaf9b9805', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: '67703fb97d0ef9ab19817bed00211cc9be2e0f882d1201508df2eb17a548b682', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 144153, hash: '1668b1649d25d0827ac640e91d4347f81990ca11e8f5fdfbd59cfd750e7ca20c', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 148475, hash: 'b8a0e5c108355be55b05004d0802c3f53fa12847e37124611638ee6cbde4d181', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 144866, hash: '6198a0c27bf573b5e1de0124645b658aeb83f5d8154d211220e7d6fb94090cf1', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'index.html': {size: 235771, hash: '27288006cc362b92bd1b8981deaf169416c07505a6477244fbe84aea8f2e7fc0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 143913, hash: '0f7b9b0ba92614ec0749eed8632dcbf4a1bad3dbb59d38488dca8294adb3a598', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 146012, hash: 'a919f9c208a6e914ec1616636941cc99da42f5a338742f236e1ccc444bb91864', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 163574, hash: '484a65dcab8f3638c6cecf08cf923dde65ad99823ab95d1ea9d916c19b5d1010', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 201224, hash: '756e564460a569e1843a6ab890d3a322babeba62f591da5788e2d214675a1024', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145386, hash: '157558b7a08a09169994445c89cee27c8e6a9ec27dd181c772ec0ef188faff94', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 143349, hash: '2e2cb9cb2e25a8c3ebaf47bb210d54c8afebb0862b87fd34e9d14a5b7718be30', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'styles-RBOUNG2O.css': {size: 993858, hash: '9LT31S+dou8', text: () => import('./assets-chunks/styles-RBOUNG2O_css.mjs').then(m => m.default)}
  },
};

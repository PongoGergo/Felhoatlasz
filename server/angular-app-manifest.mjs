
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
    'index.csr.html': {size: 92891, hash: 'bcc2513a3ea1476d73ea60e4caaf61395a308b0dbb60bd6e41a81eabc15488c1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: 'f8c2c96009de4d6f2ca6149a18977ec520e44fd5ba594ec3d24ba13d9169a20a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 142351, hash: '48d35b349523a36b15e7c0ff3c4366e22d6f118a0a34d1c5c8d1203b4a8099b2', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 146807, hash: 'de5bd0102c861dc3242c50789c169f2367edcd9c1f2dc699857aa33bc0b0c7b6', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 143224, hash: '8a56e47404cf302a378199710ef8878fc12f95f642fd16f9510b2ee1d2e2ba9b', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'index.html': {size: 197265, hash: '532149955c57bfc7e89cc45fe97d70236eed4f81ca919ae5e91c6ec0240e5124', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 142271, hash: '24c1c23e7b7f789726c8c3f7ad3ee6bd6484059373b190f4e38059aaa2bdf349', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 161906, hash: '5833467777792a79dcf5969b45f1ff985f9653a8cde105325d5f8ee2d30d6940', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 144370, hash: 'c4da68819fb5be4c48911b82f020b1cb38565d40fd14ab2aac5894af2dfac151', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 162996, hash: '6b7893ce470c25fce43be455c115945b27507cae96374929d89da51477b52cd1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 141706, hash: '4d301434ae9b21e60f8101f7b640569925e3feff1de0577d7d84cf7e0d3b4f45', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 143817, hash: 'adf01f66a3de3f8c2d999d6e04077f8ccc5eb23cd8fc388771fed3dff789e1b8', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-PKAODXRB.css': {size: 994158, hash: 'rBeJ6gF3oYs', text: () => import('./assets-chunks/styles-PKAODXRB_css.mjs').then(m => m.default)}
  },
};

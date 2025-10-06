
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
    'index.csr.html': {size: 92891, hash: 'd0e5a7659d979af8083c1f630748e29664b92bfb6a02390c63ba845d9c6001ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: '9e1d83a930abb880487da25da976ee1578fb55bdbde8a25e98ac6764f57d67c5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 148440, hash: '3078fab2c1fae61bb72b8174839aefa7594c6f6046a5cd513a1c89ce7b7f1c96', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 144010, hash: '80f462d5dac4aa8dcee5c2644172f92445c40a39c948efe2be623d317dd4fdb8', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 143878, hash: '30c5b2020db1c63623a96a4aa8f65f2bf543f5ea34339b5d070afab69c6ff3b3', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 144831, hash: '81e11c21c16cd973e48d9e5e48c1457f6a7332cbbf08ecbb5dbe94fcafa9c8be', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'index.html': {size: 199014, hash: 'e3f3e00810d51161258cc7ec2eb68aefe34cd4b068a5e1c2f2bf21ef69b7d862', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 145976, hash: '6b53db6c5c9b829f5aa52a3a99719a7937e8f1849d5666d02104e72fddb00403', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 164417, hash: '388ca89ab5d8f2e5bfe4906ebaf0cc5db3710f27268e805a662acbe0aa3cef25', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 163539, hash: 'ca88e2536a9c2f6f6d146bef846da96f429623d19f0e293f2883d033c336b763', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 143313, hash: '430d0ebb6ea5570a059a0a11b61fcef2a1a8e987cf8a96b92694e2f03631d920', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145424, hash: 'c15d9e1d3618a3186356976091453e20661dc44525ae2977b502df85a97aca96', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-657YNVG7.css': {size: 994123, hash: 'IjJ/p/Wv0Y8', text: () => import('./assets-chunks/styles-657YNVG7_css.mjs').then(m => m.default)}
  },
};

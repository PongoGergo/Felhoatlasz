
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
    'index.csr.html': {size: 92891, hash: '785376e50593afe7ba05190fe9871225c5aee76712d899a6b900fa4ebe7ad74f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: 'e4559c070778c61b336fe41ef5d7e600b5010b9ff099b473d2035b328b02ef9d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 148928, hash: 'f356555877faad1f363d422ae3cfae07fdfa01657781bbbae07361f06d25fb3b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 144606, hash: 'a262b723fb8f5eb9595fc0acf6a7a10c955e90226c92357d368dd6be9d73ac7a', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 145319, hash: 'e2269f4623c1d4e7eb135d3e5fc501a32d281dd4205332cac67ed2142f971b12', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'index.html': {size: 236207, hash: 'cddd461c0a8a9aff8c9eadaa94b119418f6ca66f5043a4b2bee5aa9e6baf1951', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 144366, hash: 'cc8787aedde4a96ad4be9592c74e8cddecb9a6f96a90b7caac3e95669910f8c3', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 146465, hash: 'ca20cd48e0785ca8909fa697eef8202b5d1724fc7c4bd353ffcbb91242e7d5a6', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 164027, hash: 'c28fa7680515762e080e48fd744ff9a5b3f4f055a02ed8dd605901f92cb70208', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 201676, hash: '2eed4c2b266efff2f68a29644d8cbd7cf31da6c2f813e3027a5365eb3a1ce6dd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 143802, hash: '11b0bc5f8ed726ff66d9c2405dafeb8f587c54d81e49c6f01a5ff87ba898308a', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145839, hash: 'e7cc623417fcaa990e617c6fb65eaa827bb899be72418794bdc13272e6efc82c', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-QX2XGRFK.css': {size: 993843, hash: 'glP+v+uAyFo', text: () => import('./assets-chunks/styles-QX2XGRFK_css.mjs').then(m => m.default)}
  },
};

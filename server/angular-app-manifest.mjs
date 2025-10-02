
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
    'index.csr.html': {size: 92891, hash: 'a4f9444332cfed55b616d75135a4113380c40136a0f65e8c45c9109e77931334', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: 'd79a239346e790ec4ab17ab4dfff8d7db74047fdbf8ec068dd6dd74b8cc90232', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 148425, hash: 'a71e02b065618302b5000016b0ad90d01bff775b958ac7ca524062d12f7a196d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 143995, hash: 'ee460db2071291f733db6f21f7a0f5920a81dcc85a61263711cd4e6dfee20084', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 144816, hash: 'fd0402e677b25b6eee8e08ef04e54de0e43e2390856eb3aa63fe96bd50f856b8', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 143863, hash: 'b277b36d448af2bd6e9e077b801424db92b013ca2ec08d7d560b8c863dff51c2', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'index.html': {size: 198812, hash: '37b5945d8af4f2d257523f46d7d991fc39f04024567d37d53fb1a14247702aee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 163524, hash: '36e241518b8b484be3f92049e36023709fefa5e71356c73014530553f638831d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 164237, hash: 'ff25ba0376688a87a6c5c10299ba063a90ec1eada9279dfaf7e23e2961468880', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 145961, hash: 'aa8cac9b2d9bc31947a6fa9a5bedd4be95e2b831d3188c83b6b8b109a949c67b', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 143298, hash: 'e95752b3d8bb1d4538575ca6672757bbbc8b25a658982f1a9e8538b9b2225682', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145409, hash: '003f97f1cb15386a6443d93b7c3d88a54a34fdd14700390af2d6fc4a35c7c4fb', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-3TKTTCAG.css': {size: 994030, hash: '75jdKzG6sFU', text: () => import('./assets-chunks/styles-3TKTTCAG_css.mjs').then(m => m.default)}
  },
};

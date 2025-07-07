
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
    'index.csr.html': {size: 92840, hash: '3fb4b17ea4a5f8956c7891aec7761e422af8897e5fede5f39c415a5317d3b33e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: 'f7c700968da9590df578d55bf878634a503010cc4c177a361e02f979da965416', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: 'f7be09503af7e5cc2d54acb7549b070b8edbf64853aa3970fd947f84e1e01d65', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '71d1750f45878ba322bd8c75fb877a91099ed750d13b027404650f79f8271bcc', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 157008, hash: 'eb4f9ed68fc447c224e7d7a7fb62e0dc655432eaf4cd0aba67d7d8130fe9e1e9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '88c93d1224fc10355a33f300602582c3698c7418496125b81367159cb3e69058', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129914, hash: 'a384f6010520b257e3199ebea30b0c636f22933cd24707cab12595cf83b82bb3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '0161c225c1455b9885dde153b52e11cf6e8c4fe5f256319a24baa258bd2bc0f3', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: 'c2f35d7157a20836877ae0bc7ed56386390c4293611f48969828f26c21e316c4', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '405920d9ec22964e80344c3f8a3f74c74822318c3b634656d6541495713d3a4e', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: 'dd1b877ca71a93b466b4a30209c5631d59955ec464900a1ebfd2175627205e58', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '12b262a94967f59ea2cb239f5aaee710d831cca59928b684630f0e314e1a5ca1', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: '82c3da2af46d5d6debd6871c81174b2fe977bc176064a75a393f1e923b455be1', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

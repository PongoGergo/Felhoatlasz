
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
    'index.csr.html': {size: 92840, hash: 'ad2bda81027cc264b7f04f46ea537231a85b139e9ba21381718917be961108ad', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '982be9d03e8a26000f5b402c562fcf08d59ab71490ff3d202582b03e12c397ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131553, hash: '2199af5749d16306b808fd506084b1143f30c869df85668d7994319df3bbf63c', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 146445, hash: '7a336021c3ed63be3511e913493ae4808776949164bc1691e09bb863a28831f3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137789, hash: '367969b42cf7d142a20783af4636b3d6bdddb296342de890d2173de61f1b5f61', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164897, hash: '378041a0dcdc5ba13471b9b6d99460a2e2da3446288169b740aa5903a6b36d89', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137797, hash: '64b1f0c61b53ba6b61d6b87469c30412d0ac9864b21e55d0fae9d8f67ace2555', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129591, hash: 'b7bf6f20d6985fd94acc8271b3a02021ed8a548086704bfffcdb38dfb79d8e87', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131049, hash: '1333fc36e18cae829c059652a05a60bbc21f0d2165f4db2762f1ff9836e18221', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127275, hash: '94f5462f370c95d1a6972e838ed30496fbd4f30388f3694c8151d5bbb4d36d99', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137799, hash: '8028d1c66cae7c7ac9dcf7fc5137e9d631f399a92f65f1ece3240e5d4bc8b06c', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137787, hash: '9d4dfd0430f0de6eb94c13d8b3e1fd2a65c195e6616ea7737d21b6434387b1a1', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127450, hash: 'e5b739252dfc27519bd5950fbdbc880053e2a69a71b74096c170fe8cda01cb2e', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-UFIRDPTN.css': {size: 992600, hash: 'G8UW9kw+WEA', text: () => import('./assets-chunks/styles-UFIRDPTN_css.mjs').then(m => m.default)}
  },
};

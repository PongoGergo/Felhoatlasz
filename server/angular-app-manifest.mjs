
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
    'index.csr.html': {size: 92840, hash: '82ce7595a30f4b862d0a5e13f90b51d97e0f9e3ef317d1118c38913ac02f1a06', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '99483a3d3654fcc67f5fc07f50acb7946b15ef23f5f6ba478d64e11c49e1bf80', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 131655, hash: 'd9253c521035db541f4bde53bd75e141f4a3f48bce8a39257ef50f7a70064a03', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131549, hash: '49ff289b8f1fe85dc6a284149beeeee9717fff89d1325aa29cba9d194884b4d8', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137796, hash: 'f029e7b18d877ef6f13348c404fd8792cc22013d7eafe62ede8fbe95c3aae58f', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164897, hash: 'fa6582b89f895757c41860db8b31b202cda639eb9d42f7d4ccc3208e8aa785c3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137823, hash: 'a79f1837d253045ff5c48366dc104852a65757845ce4a7527dfafa9d98d41d32', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131047, hash: 'd7dd080209325812b01adfef342cadebda3d9e8eb608bdd895c43c69f3bb3c24', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129591, hash: '6d52229a1c6630b72b9b4910c4a7ba6037804458ab1149970b493d2037912cdc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137825, hash: 'e955f70230e99f11d8763e9db5cbc1bb91fdba28eba0f5c8d3af06f520a20380', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127274, hash: '2045a0042246c2fef512d4ea64a1a51054f5fdddb0155e43616a89b82cb3b749', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137787, hash: '6d19f09323039c2616cd0839b69741fde96e1621ae616c43af8f6815b059f885', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127450, hash: 'c88bf69548db48ef3196edaad8a7e23cde10fed71d44caea70b85b72198a2d69', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-UFIRDPTN.css': {size: 992600, hash: 'G8UW9kw+WEA', text: () => import('./assets-chunks/styles-UFIRDPTN_css.mjs').then(m => m.default)}
  },
};

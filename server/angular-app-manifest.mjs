
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
    'index.csr.html': {size: 92840, hash: '5599b676924557eadf2915ed0add9c03cc98cb8323fa6ff63985b74c70508586', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '83e5155ae1b016f84d1c9bc0d9cace84a3c6e7d8799f04ceb0c3b909e38bff98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '3d4f7d65cec360497590a759c8ae4fb92e130b82151a38b7cde30530771c4e44', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '0ebf2d190f435ecfdaf193732cfb9bf4733dc35fc3376996f62660e75af3ca29', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '9d419c55c97e4b13490c487a998862db52a0a561d7dd88dd3b0528dbbb281545', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164616, hash: '14d4ee795f8bcc7c3952f8190547072b292dc092a2802cf0c7d12deaa56aee61', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: '0f990323d8f98fd7f8b9a0539e8644dfa5c11d14d6111075c6e2e981f6c3a3df', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '5641d6c368693452b8d76ede0073a71721b672c04acf1ac4adbb2037aa743c4d', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129619, hash: '9e8b32b81b2034592cb01dcfefcb3bd75828a0b84f208af7bbc876c2f270889b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: 'fdefacb58d9b1f365573d382351c30f5fb5a51dd646eff3370d1934d8e2871fe', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: '83e3b90e9cf0463aa5996133cea009bf4231f751d556a26a3d554e7370f41fdb', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '5b5c19f2c7ccfb844b46d73f911c9dcbae39010738ba9890cbfd5ae80958408c', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '00b3b7ed4685634bcf72f78d115509f878ba24c8e1fe9403f4e1cd7cb485336a', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-IJXOCBD5.css': {size: 992058, hash: 'cwmd0vSMaeY', text: () => import('./assets-chunks/styles-IJXOCBD5_css.mjs').then(m => m.default)}
  },
};

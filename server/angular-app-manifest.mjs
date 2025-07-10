
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
    'index.csr.html': {size: 92840, hash: 'b21482c6b79b3451118fe3dd43ea06871d90a61a2dfa2383f7bff42475db68f4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '20011a1c55c98ce56235b74660d56dd5656dde0239501f3c11fa4b3517597ab7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '93c685b776f614f3f67a31bb924764d70952c7b8c8bec6edd6a81524bebc0047', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '1609263208adf801503aedf76b2c2fd7ff114d29ac57d832e92ea228851830e0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 165250, hash: 'f5ed2f7ac0872e81024d62529abcd301638fa0f2afe3e7840eeda26dcea97877', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '4d42e3a98ffec384ce8633f1768918ffa5f0810f18b8d7845eb87a7c2c7c380e', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: 'f697a39baca20e8ffb4a7944e634c5d93e09c35035ead2eb86d819216136bb81', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129619, hash: 'd975c82b4d362fdd1115d7b5f9c93b7447c4fd8e1f81b50d1c03735ae9cba3b4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: '3493d7ab53014b429d8c392934d3db0383e8a8d585c60aad47fc945b73020524', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: 'deb99e304113f56a68edc35abd46eb3bb0d199550a89aa2d4223e654b4ef385e', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '9a3b4626512de93ba18acf67ed68530b20b1d1e845acf329ec0ba0fb83eaa3c1', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '3eab6e160ed0ecb6cf498b27c70ad6f72d6319bfb714580b70e548e8d21fa323', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: 'e580b1a86f0db57d9de841e60f21491afb280ebd3dc3de9052d6e3fa7f144b87', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-RHO6ARC6.css': {size: 993169, hash: 'kuQXXgAloH0', text: () => import('./assets-chunks/styles-RHO6ARC6_css.mjs').then(m => m.default)}
  },
};

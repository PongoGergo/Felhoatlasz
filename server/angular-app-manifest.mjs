
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
    'index.csr.html': {size: 92840, hash: 'e28339593e3eeab2f6bd2e916b532a0bcd94004587d674590ab3df70437c0690', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '5a16ea6d8e6f741856221e711b772dd27a04d1f6b0909b068306ce32f15ed4a1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '4167c4add2760c7ced2c03f6a0230d6a79b699f03988d8bcb5d8f5253e4f921a', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '3b60a761847afcf6277b6d2caf621f5809839b2da09ae2badd759456862edc2f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164806, hash: '622303211f65f094b064afd090fe5fff10a6bffd7f0e8ff5db5e069eb538beff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: 'b103e0f7149dffe6c33d1bea9695dc61040ecc520733ddad2d450eb027c889f0', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '5bf5ded87e34cb8eecc8149444628c26e2a238d0d42cdc219c9bc2c3d6f65448', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129558, hash: 'b397446f9ff4ce9886ce6b5ca6978b98f457d6216a02b46776ded45d29581d4f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: 'bef08ea3f8add4c4562afb10b3f06d16cde016dff58189242959bdfc96d9c77d', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: 'ee883d8cfcfd889004237c0a29e29aff5c55a4c03f3004c3ee6cb41fdf7aa33b', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: 'a08227519e2178d212b1f0aaf4fc8bed649454aa940d1cfa1f2cbaf264430a17', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '77a1aca53918dc70586a7ccb50e48015e87ad583e0fa52601ec2d5c9ec4303c8', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: 'de0f7cb86862bcb92219dc179c9a758cdf4b1226fb62c76bfa8b768d350dd9a0', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-MVAQFTAV.css': {size: 992725, hash: 'GK2D9Wmizfg', text: () => import('./assets-chunks/styles-MVAQFTAV_css.mjs').then(m => m.default)}
  },
};

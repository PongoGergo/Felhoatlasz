
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
    'index.csr.html': {size: 92891, hash: 'a3ca90d001bb51e57cbe03b1420e4f3814491eba7ba8dc763f7a979b466b637a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: '1e9dbd38452fa1f0f62a9550c9b65e341129bcf8897903d0171d930709b48c4e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 144639, hash: '267f5bbe196dfc2e2637489a200aceec48f7a4b4bfe382bacc1780c3756f9505', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 149820, hash: '24e61bd1481bad55f84ee6317c451eaa79427be11736ae59bd99650a05781892', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 235882, hash: '321b6cff4124d5560b62a0353a0b3029535d85a90e69ac39efe507f026ed7098', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 145240, hash: '283c46712020718c333a01c76d2df8c5f521e0fb5cf30634542e3a94a8c634ef', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 144298, hash: 'dbefe1ec3ffb01b7680a44882af164a80d2c40c44d77bd731f8c560b35fef49b', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 163895, hash: 'd0aefd5ce141c7e0b46422c06b8d95e30f63a0aeb29cee885274a828aa7dee3b', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 146375, hash: 'd03c67184e2f9c3b228e390c1eb8dc3716bb4c729de47557bcbab178776b620e', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 143739, hash: '41a901f293fddf2bf4fe17b9490472a6109e544787d3ad484a7fb876b4133f65', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 201441, hash: '11c4b7f66c5a7db6726d4fc858eca4de7a6bb583c771f71804e8513c3460323c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145761, hash: 'db6abfd7db8d9a61a79732b0b6c10ad98073b91b6d3ebae7d10d125ed28be408', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-J6MCLLAQ.css': {size: 993355, hash: 'PUXD6m79AOc', text: () => import('./assets-chunks/styles-J6MCLLAQ_css.mjs').then(m => m.default)}
  },
};

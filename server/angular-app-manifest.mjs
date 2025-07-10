
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
    'index.csr.html': {size: 92840, hash: 'fa3550ee145c742c7a9bf24fc101190a3811d6b9f95dc6489ed39e74bf71b671', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: 'dc367e90c9e821aba37d0b25157e5f00cc799d9556eb63bac81bf9e2549887e5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '101ef9d531d3e04544950d0f3a46612c63d24b2ca9787a8b485b31577b002245', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: 'e3b939477410ef51775edaa46f7c08e78c4fbb571c867b96c40fb4770bd08a88', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 165028, hash: '18a09ec17f7a7455c91c81974a3e07cf29e4bd6787910792e34eb521afdd0bdb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: 'e9f269f022c08d130514ee44c67b0aaa26ac6070ca3fcbfa86a484867b3ae847', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '7568e55804dc2023f0a5690b460e764f22b949516ce1621fdac9d5a9c853faba', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129619, hash: '4d99320b6916bb569436994b39b6a9f06ca8757467f5bc4879bbf7cf2067017a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: '6910734c8b9661105327dea613dc3d712355d7d039083e5e0114c72b98907236', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '35f5eb9629f60de5be777abc8e50cb4c92013f00ddd056e9a77d7b1135b7b369', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '667e16cd9a57763c4df8b797eb9c56e7a44d2e8c7763a5977d1b0633df4641ab', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: 'a6ab2ef3257757c0840817f66e491b18d01f04fd4036234685caecd4947ddba8', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '9686232cb65308f4ecaa0edc7795054065a2c356f5240aae7eb7202e9fca281d', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-GJLGF4JC.css': {size: 992947, hash: 'e5K6WMTmdjM', text: () => import('./assets-chunks/styles-GJLGF4JC_css.mjs').then(m => m.default)}
  },
};


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
    'index.csr.html': {size: 92891, hash: '38d880cbee8cbdfb6b95ceb2288eedda13f3b2d259fc07e2ecd1c4f6ec4dd8eb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: 'cbdf815e0faa6c2cd98a25e1e318e6434e0ba69353192f2c9b54dc7b23b8186d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 150004, hash: 'cb779649822afead7e9e5c8d0f5502138f62ec9b3d35f1b5393f1705caa8702c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 165991, hash: '6ad927479f89b075a31c95c0b56ce6a16b45f4fce75c2ca370f90000f9d387c3', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 183436, hash: '9ed7cf925ec7f32402362ea5ebf39ecd1e3759ae61bdb8274fd4da8c36618a78', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 145382, hash: '02e644ab15c7d3032041b031732083a362cb18954416ff5f2516628419e06024', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 146515, hash: '801f945aff8e30ac41062a565b8dab31fcac57dabb19c082d37552dcc70855f4', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 147985, hash: '1407773b07c0add5a03793fefe420b5f3a93e0bac526d8bf2f3255986d2e523e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 145366, hash: 'd32cde69b04722a741f7ec815f913b2d2af67bab4db45449c1c94c4006117b75', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 146548, hash: 'eaffc8958a466cc66642d67cb391f9dc56fdcb06155ace8f82e3f462e3f81fd4', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 141576, hash: '322854bbbd98b1dd1529554eede939e01190fcd5a170397239e773b6f274293d', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 145441, hash: '3bd0f07069fad8d4ef673c3a1c97fae8c2862d9594d756ee12d5ef6b0d405dcf', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145844, hash: '9e46e7dd102e75b4f04ea6fca0acb62e9915a5a4a04f83a025b7594d1fbe57e7', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-ISLHFUCO.css': {size: 992663, hash: '9NQU0uhpplI', text: () => import('./assets-chunks/styles-ISLHFUCO_css.mjs').then(m => m.default)}
  },
};

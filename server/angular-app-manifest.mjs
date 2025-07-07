
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
    'index.csr.html': {size: 92840, hash: 'c16325d9e8055dd248eefe9af5de82301afea079cdb99b122499abc46edff081', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '437c736486d1a98c4448cd3739176ccb23908c2a7a3c35930882642dc779c359', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 134124, hash: '8ccb5b3afda2b2fb1bab907a25972b4b926756fcd90a6cdbc69c70119fa7f13d', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 140038, hash: 'bd92118e80f3a1fdd9999ec5f23d30d4ecc66cdcf4e22b9be896192758a6f78b', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'index.html': {size: 158778, hash: '60b0ffa93ec691edca96eca84b2ed052181040a14495b04c68bf82d5ca7d7bb7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 143385, hash: '38f47dde6b9322b0ac033c29fed8c047fb10db16a0571f5979527f57f6c7a6eb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129569, hash: 'dddfb93b195f38da1264c2a701a816e07b8f20c8eca93e157ced5bbed05bd204', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 132494, hash: '41e2bcbc0c4e26a894b2f5e6b6a4c7d7f56de5896e732fa577a3c9121462d913', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 140045, hash: '0f68dc68b8e10f66bf2e2485a390cf61d1b546883be4cd937a63759612c55e30', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 140048, hash: '145caf35351f2a6308f6b474d4fb4f6bd51123039f5686197a4deffe33ffb6d6', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 140036, hash: '3dbe0d224f3424f801172d8b92102f1c39a03594552bc6de149ed83bf72e7801', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 129794, hash: '113d73cafda7f411b6130b4c7cfa7f86c9523184597cb436874fa3939e1041c5', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 129993, hash: 'b832e49f61d0a7ee9316bb92d5f9bc72fb2ff6830d931e32f1633237a510a239', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};


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
    'index.csr.html': {size: 92891, hash: 'b257f93ef7e1ceabf8dcd6a0bedf6eadfb4448ea1808f614450d90a55a4f32c8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: '67a929b0f5b2fd96df1ba43b0a897003aca3d0af2ca8709155a69f4c76c705ed', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 148440, hash: '92c273e4a8305d3a3884bb4a8d952996a165a1bfcbd1ef2c03e67beb32f15976', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 144010, hash: 'da601db4a0cbf45bab2aad15cd898f19e53121aa142a357c5fe538b77341525a', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'index.html': {size: 199013, hash: 'a8479e202f9d63bda7870293e0c3d9378652867a449d79fba459c6cbe7db3f32', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 144831, hash: 'dcaa918f52da2547ef79ee906f16b2439ec9eaa59aa36fb1e804fa53494a9836', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 143878, hash: 'dbb0f97eb91575a23fabd0bb6255c588ef21e6a35f463810aad5c0c74664cdde', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 164200, hash: '875488f1a1c15ef8330a4ccdc7ad7cc22e3cb6b7b89195fc0a3d91f70623ab8e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 145976, hash: 'bc9868fe59db177a67fbbf5446f2b29df3222aba623802bcda55cde56e71c03f', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 164469, hash: '387b5e0106e96c8b2f4a09394927bc3a1e8011cc54a2c03579d41f4ad11c405b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 143314, hash: 'ea615788c918b43b63d1a6bb22b6ea5f71c5f42b2a07ea376316bfad1360630c', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145423, hash: '0a30abdb2496a96c6fa85c8a89882c7f9ca512d7330cee1f33ba2941421a43fa', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-Z3JLFYOI.css': {size: 994184, hash: 'a+VHgrkggcw', text: () => import('./assets-chunks/styles-Z3JLFYOI_css.mjs').then(m => m.default)}
  },
};

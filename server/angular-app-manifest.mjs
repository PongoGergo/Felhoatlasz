
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
    'index.csr.html': {size: 92840, hash: '3213dba9af071849d5a3b2d09aebcb5f9b245e7024c0b3d10bff3ede2d050adf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '135eb34fb956fa0602c750b8ed8669dd0b4320ff2d59fc22c0655c4e1f7c51bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: 'e5212ab91790bf6ed507510d3b2f8cd39fd1edca43bda4ea608ceb38b30bcced', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '253932363d65924bedd11fa08e76ef747d3c1c8d9e73f5f11f62832d57122f6b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164883, hash: '6ba5504b03dca65ceeb1bf4f242b5fda24e6d08d4925774a587cf2e9864dd358', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: 'af6012b68b03c6954343a879a5bd7597782e354793909b7a61b7d98695f59a62', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129618, hash: '1e76392fa3c9f51f6415f0678c044b145b5382704fb08bbc59b967c8a54bbff9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: 'dca2a9b3eb0357d1769c7105b2b00b1972951b58b3a30da0c9bc38b25cb2392f', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: '93b5c201aae735146508dfd65e499a4cf67e89f312bf84f300407d25a7f9a71c', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '39ddf9cba5c8f4fd4cabd517b217746d95f88ff6d5f06bbe9422443ad62848db', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: 'c55dee09a981630cecb045512f54c986b624b925f6f5caf10025323fe3845960', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: 'e35d344c4a709693ef5fceed1d4846e5614c6aa54cab503df0dbacc24a515610', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '7468d6ad57a012c35ec5f1538c17b78cccdfaa620db539fd44fa3af244dbcb5d', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-ZDCXNANA.css': {size: 992802, hash: 'dVoe1zuGDLY', text: () => import('./assets-chunks/styles-ZDCXNANA_css.mjs').then(m => m.default)}
  },
};

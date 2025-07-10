
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
    'index.csr.html': {size: 92840, hash: '4a093a284ee602726d205789090084cd8e49f038cd5de1345868d2cda5a75af3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: 'cf5d2236371b125f708d4f7400192174691e10e3ab6e61652940b2f6b90d380f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: '48c4ac46b0f4d0fbde60bd667bee1a67638e6ea92dfe41327f52fd8c72da810e', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '6c9fa3abab7e107ac8bdeeb42f5309c202a63bd14e286a56e6178bc549f30a96', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '6acee48ece2e4be8345daa7a3ea477b6b0b00e5c21f1f8fd0956a298a83c99dd', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '7d23d8007440a44caaf9492da18b34964f6af4489fc9af29fd8b2df75ef4cafd', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'index.html': {size: 165040, hash: '772d7204d8f0086dfa23b62b772a33445ff4a5e344296336632f7912f148fc15', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129619, hash: '31a0c139b7747e53e114a3da832476adb70dc7d0629464474d1458fc28ed43a1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: '2ee4bf0172af401ca71e1472e3ab50cb62b5cd710bd5dabe23af384d253ca0ec', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: '351f3a0e34ce8822f176389cb5c0a980d53692ca1ea25ca8a64c584804ed0ef6', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: 'd4268e0421fee678e44b708dfb9755fd10da49dda082f425c29a40b6c280315f', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: 'aef856a20a66cc6e2cabfea9b8f81a16b7beeee7001bf812fbb36a96c81564fc', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: '7a694c62344d2313b4f03e22b34b0781704611f6a21228f09982605560a532e3', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-RATANIZC.css': {size: 992959, hash: 'sO/BZ3mAVBM', text: () => import('./assets-chunks/styles-RATANIZC_css.mjs').then(m => m.default)}
  },
};

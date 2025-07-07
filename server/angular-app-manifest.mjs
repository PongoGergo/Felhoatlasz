
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
    'index.csr.html': {size: 92840, hash: 'ad2e0c043038a02f5b7072213c3c70b7b86f8523f654722283a99fee47894ddf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: 'a607fad920798a7e3fd8d4f897d4c6cec59501f89d3e31d60736cbb72e09aa4d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 134124, hash: '44b52dc449ca49cfde402c4594073283fa04ace9226a8cecdd2804af4a5734ec', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 143385, hash: '2a039dd7b2c354373f6ddceb74907cab66ee9bc498ae81ee51cb40bd74b4d6b1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 140038, hash: 'eda83d048c2bbb93b38b799ac4815ed3c3dc1c098d9530317526d7edd382c533', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'index.html': {size: 158778, hash: '0d68257f4ae939a7f12eaba391e86954718a0596dfa8570267b6518a0120bf09', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 132494, hash: '8af0533e9d6417f7f55f0cde3c005a96053932c394b5b172d42954af81814cbc', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129569, hash: '02d0f4c9d6a3cba8cb0061bdc22d94a86800485d39700ee9c34c2dab1c5f152d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 140045, hash: '1d5024dee9b0a54b5c935208a3077b89e056d72e263c09881b257561f6fd70db', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 140048, hash: 'cabde4fd21d2b0980593c44d5e71146758b2b6d6509af53364886268847b2744', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 129794, hash: '53f397b7370471833b790d3928461d87dcd0ab35adae42e7f504a437a57545cb', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 129993, hash: '83a545b2776359ae2ec9e4271880b8351bd0973a1cfcc7f591682d8e6d15373c', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 140036, hash: '8b71cffb82526502c068356599b2e878e90deb3763e723f9c01cfe0d3d0850a6', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

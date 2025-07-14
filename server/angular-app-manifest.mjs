
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
    'index.csr.html': {size: 92840, hash: '996eb826c9bc35c97cb6abae08a4e4abc0672aaa7aa6f45844706ba814ae45af', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '368670365351f092db770092b41145bca04b6487a65fd05ab77d386c012032ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 149168, hash: '14f5c8b93230a82c677956b0ee95331532fdeda415ac0f40da143a5ee22a8fce', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164790, hash: '25f25aab83587b06015bb3c089931562f78fdc4bfb9ad0a8caefcf054f6dc134', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 131550, hash: '6f4f37f3358ab32bbcf34eea6c843b8a7698d3af23cd18f587a21744c7edd727', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129591, hash: '36c3ddad4e9daef93b180d644348c1882f3866f9a66e44539782ae093aaa8605', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137796, hash: 'd5739e2331b63c1d5e6969c4d1e76b1dda7ff5c6fda0f7938d074e1391e9effc', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137823, hash: '752d8f4b230d0c5d7a63679da00a4c98814119012781fbb4ba0a62056cb29b6b', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 122528, hash: '3e40f312cb11934d03ab390a5b4b533b06424275da5f4761f09409e7e4de0a84', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137825, hash: '8a9d6010008eab7917b2eedc4c36e654e2ec14b7b1924153190f1193365aeaf7', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131047, hash: 'ebfca7dd16903a5599e477e7a49404cfe7d81d8196eae2055e1ad38497d385b7', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127450, hash: '09b9ff2e829519ac32ad028b818e9f262ae44641a6c6620c39376db073e79008', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137787, hash: '17ecb063e24d127368bb295cd0055b3c10b11b2cdc5fe2e5c7e68916026b0a5b', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-UFIRDPTN.css': {size: 992600, hash: 'G8UW9kw+WEA', text: () => import('./assets-chunks/styles-UFIRDPTN_css.mjs').then(m => m.default)}
  },
};

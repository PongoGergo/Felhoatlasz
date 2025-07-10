
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
    'index.csr.html': {size: 92840, hash: 'f745e6085f82f1b75fb7ec6963c2118bad250df8f8accb2c54959ca4a1f749ff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '800466e030b9d264f53c5fcc23e0bc154c6fe2f8bbdca05637b778bba12f0450', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 131587, hash: 'c2ed1ed090896125c035e8e17d1ee74d447362f17edbe93bd3f9b6bf14e44ab4', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 141190, hash: '20b60a345ae9c7489dcc31182b7eec22f32e05f3f954f7c0be5d88b41c295202', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 164884, hash: '5ebaaace601aabc5355c155a4608bbad27e0e8c7c197ccfce4cdcd120a8b2bb6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 137823, hash: '8b6d81b90760cfa793f9ae312563937e75ef3936a8234e1f45e4c12d7bad7260', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129619, hash: '3dcea1bdf31fbdde5710c3576a595582e71aecf29b37c61f5cc1607c3efcab27', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 137831, hash: '633d3a1aff7b79e6c15ca779d14da7bee2cae0278f3fc9782b74980a7ce13430', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 131083, hash: 'fa90d4ba4f6cd641e831658080abb1700d28feb37ba7c31489bdabd96dc246b7', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 127309, hash: 'ca8cb8e293ecba47bf964f357cec3d1281c2124bfa53a64ad8fa435d582d5a02', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 137833, hash: '8204d929dec649d811e3a61f4fde15ccdafabcaf1392e0f9d8f398e47fb230a0', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 137821, hash: 'c191f57b5b34ef3efbf3a693bd3491c7aae118f6dba9d815b2b5b6263a5ca5ab', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 127477, hash: 'a28fda925d0ee05833368c8f4ca025337127584d38cab8fd16f93b558d6be8af', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-DL3B5V65.css': {size: 992803, hash: 'shLBaSMzBzQ', text: () => import('./assets-chunks/styles-DL3B5V65_css.mjs').then(m => m.default)}
  },
};

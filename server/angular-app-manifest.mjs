
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
    'index.csr.html': {size: 92840, hash: 'dda1ca9866772fc5d19669e9cdf538981caf82ac7de1270d59e21cc81011cfdf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: 'de3c5631b43b55c83ebe54aa9f95961a0e01afa493daa047e658f33d1f1e6374', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 133899, hash: 'fc337b62e9b03f83c811f6c95c5f3634d7a02f7d9050603d1981036aff965352', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 143032, hash: '95f05c7e161b0c99df09bb1cd83cd8994518ed03ff6ebdded5a94a3d29089cdf', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 158516, hash: '3664cd4bc15611cb6da9f8c00b7157e09477f925bbc47a399b01ae95f7394a16', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 129348, hash: '7395e4f1f39c350466021eef3e22903178436cb0cca91eb7c7f9946496a64d50', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 139751, hash: 'f477f4742e64c513aaa1f022a286e926ff39e57e5ecb0710ac4aaf34d2a5dde3', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 139760, hash: 'ee8ab0a2555aef64fdf8b33ec7f1eb4c42f81bf55937693e3d45a5e45afbe019', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 129574, hash: '4723180bbf4cd0840ed0a01440719b68b144ceb62a8cc9777538fc295478dc88', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 132034, hash: '3a243f00d6527dc97b414f55e011c5e537b30096198751f9804433af783bfc72', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 139762, hash: 'd217395cbe0f4ac7eef127bd908e9fd9183c03d6758a31052129702405a7bc06', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 139750, hash: '916d3232be4f32a93fb5a4e52eb724b4102f949d069d5e8b88492dce66a9b184', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 129773, hash: '4783ad864230f6ac3c9fda97c08caf32f3ceb1bc7206d7dce3addf5b9e53aa5b', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'styles-P636HRKS.css': {size: 992691, hash: 'IEemEoDNlKo', text: () => import('./assets-chunks/styles-P636HRKS_css.mjs').then(m => m.default)}
  },
};

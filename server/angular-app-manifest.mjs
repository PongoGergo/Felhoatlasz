
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Felhoatlasz/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Felhoatlasz"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/about"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/contact"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/documents"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/faq"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/carrier"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/szamvitel"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/konyveles"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/konyvvizsgalat"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/adotanacsadas"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/penzugyi"
  },
  {
    "renderMode": 2,
    "route": "/Felhoatlasz/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 97616, hash: 'a6ece89d5f356956d447b097fe18e20a27643478a469a7e2208bbdf1a7d90f95', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1113, hash: 'b4e497017f7a882b2b38c0d0b8b763403dfa75b3b9168a612c447aa4c50498a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 173526, hash: '37edd12a8ac84366444e49f143e61b1a23b8a9ca35646d329737e059034d453a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 148352, hash: '3a0b399c3050e40c39e070064f58437983a45ee5c4b615a911b040ade9f12879', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 155996, hash: '14341a965836ecfe2edff6c8b5bb7a8863cfb684fa758040c9573ae935150d0f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 142323, hash: 'a4fa6b13124f5ec4605c821d30cc890c5cc2ead61dbe069420777d2a0771a8df', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 155549, hash: '213a65d8d7c7bc721f0c89f91f07b4faf3ce774e97797466f97eefb9ce9f1a77', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 155540, hash: 'de92d108d87f48bc0f716d9cdadf25bf47008439e12f6051c89d9752a9c09017', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 144776, hash: '4ed0a73aaabbbd0ac743d9091660ab911124bcb9ac14ad1e8904a365edaa2779', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 155551, hash: '3bc5d1978daf7c0c49cbfe352e38b18d12e2963782fea28438b388b85ec35561', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 142359, hash: '094e254de6641277548752b0ce2c61398a28d6a249bf5b451619151cf83ce311', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 142491, hash: 'c092683c62b13b74b77c629669197b1743c76c383740d90a2f19bcb9a6e253fa', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 155539, hash: '31fdf15644869739a091063c83e3da7ac4c815e6e2fb3f56c34d6c68b88fe5a9', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-EBTESGBP.css': {size: 1164064, hash: 'xte9xuV4zL0', text: () => import('./assets-chunks/styles-EBTESGBP_css.mjs').then(m => m.default)}
  },
};

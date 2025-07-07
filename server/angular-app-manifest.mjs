
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
    'index.csr.html': {size: 97604, hash: '67dc5e7c07e882ea46e6431b07bb604f1c6c1d159822b1f1a9efbb4703e94d06', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '84a8f256c4a3e5be69474b18c51d3941ac19dbe4fee5fde72dd81a9c10b18ac8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 148340, hash: 'c5018cf8d4888a708159a43d50fc8d483cf1856c37ece99e0a525c2ba30a2a58', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 155984, hash: 'bb643e591efd5f193a3a3cc77b74ba9b867ac1b436b8fdc00e0db68ed5b54e1c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 173514, hash: '7c493b2cb7e7c31110df8138f56c0c3dfc0d37cf634a2da038b5cbd538ff994b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 155528, hash: 'ff660400a9cc2f0840e87ce367f4f1d92e3bf7f7b1958338bd89fcdcfa784b15', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 155537, hash: '9a115a7342066374a406a5da771052f898edd28478c167b633005e22bca576fc', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 142311, hash: '9ce499646a1eb6b9194f3a2f97af63a47690b88083d79e5956b92c6c457cf5f3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 144764, hash: '96d8b219bc6ab19582be7376885bb59457ca8f3a39e30b648aca9bfeef1ddafb', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 142347, hash: '02293bfeef5ac1a07bdf58daf5352004896266b320d182a67985dc560e51a3ad', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 155539, hash: '49814f6d20cf817fada41ad915daef2ee333de90d5a2477c5e05b17fb8aec72e', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 142479, hash: 'ec5480ca0282ead8fdc53cbc0c16d00a6f2c63063e5915365fa09fb15d85b4d9', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 155527, hash: '2fe76500e3dcc5b9ece8988f8ff052bf453e245ed213b08f7496b285afde5812', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-EBTESGBP.css': {size: 1164064, hash: 'xte9xuV4zL0', text: () => import('./assets-chunks/styles-EBTESGBP_css.mjs').then(m => m.default)}
  },
};

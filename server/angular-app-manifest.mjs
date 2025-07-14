
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
    'index.csr.html': {size: 92891, hash: '3328a890f7ad1db615840e168111edac4e90651ace1824c580a50c2ff44dbe22', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: 'fb5ae92ec58ef543ad930a26677ce11416885685d4bbac0fa243f7c919233cbd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'faq/index.html': {size: 165977, hash: '1dff1b78b50fdd22e04c1fb25d857c78b0aacfe806f469f2b33660110fdd142f', text: () => import('./assets-chunks/faq_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 149930, hash: '7952b050df8f9e72db078b54f816e9f275f428ae821e751149ea8ffb450c6170', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'konyveles/index.html': {size: 156176, hash: '5ae8033ebf6557b44d2330a3944a1cc03a58f9b5445fcc54cb22868e012f256f', text: () => import('./assets-chunks/konyveles_index_html.mjs').then(m => m.default)},
    'index.html': {size: 183170, hash: '203032189b40661376204c9d6a5d47fcbf0632e17145394d2d442715e871b4a2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'adotanacsadas/index.html': {size: 156203, hash: '2128b136861595bbc14e89962a2bf92527d709d0bc6a36640f3658e337c0f693', text: () => import('./assets-chunks/adotanacsadas_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 147971, hash: '97326dbf80899f13476c5253c5752eaefd393954e6a2779596469a567b97557a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'konyvvizsgalat/index.html': {size: 156205, hash: '7bf4b643c02ebebf4247894251ab09457c131a8b0127900a94f6e3b0d1713a09', text: () => import('./assets-chunks/konyvvizsgalat_index_html.mjs').then(m => m.default)},
    'carrier/index.html': {size: 149427, hash: '3ec62e5c3704b9f94b8715c4acc663b003fbd06ccd5c71c210b90987e6fe4524', text: () => import('./assets-chunks/carrier_index_html.mjs').then(m => m.default)},
    'documents/index.html': {size: 140908, hash: '7f0808f3c1df74a814b083a549244d43ca2a0a4d17684d70dc81bce3f3f4bc87', text: () => import('./assets-chunks/documents_index_html.mjs').then(m => m.default)},
    'szamvitel/index.html': {size: 145830, hash: 'bae041b13e0865b07058a57bc6c846a1925116646ff56be23d81c3452292803f', text: () => import('./assets-chunks/szamvitel_index_html.mjs').then(m => m.default)},
    'penzugyi/index.html': {size: 156167, hash: '998b5a0b38642a7b5400c0f3ce49b029dc9a6912d99cc775cdd7e2a2e832a658', text: () => import('./assets-chunks/penzugyi_index_html.mjs').then(m => m.default)},
    'styles-4FL34DOZ.css': {size: 992603, hash: '2B3TqjcMIis', text: () => import('./assets-chunks/styles-4FL34DOZ_css.mjs').then(m => m.default)}
  },
};

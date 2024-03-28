var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './Pages/dadosPessoais.html',
        './Pages/endereco.html',
        './Pages/arquivos.html',
        './Pages/sobre.html',
        
        './Styles/index.css',
        './Styles/dadosPessoais.css',
        './Styles/endereco.css',
        './Styles/arquivos.css',
        './Styles/sobre.css',
        
        './menuHam.js',
        
        '.assets/large-triangles.png',
        '.icons/128.png',
        '.icons/144.png',
        '.icons/152.png',
        '.icons/167.png',
        '.icons/180.png',
        '.icons/196.png',
        '.icons/256.png',
        '.icons/512.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );

});
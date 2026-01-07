const CACHE_NAME = 'pode-parar-v2';
const ASSETS = [
  '/livre-para-parar/',
  '/livre-para-parar/index.html',
  '/livre-para-parar/manifest.json',
  '/livre-para-parar/icone-192.png',
  '/livre-para-parar/icone-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
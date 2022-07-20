var CACHE_NAME = 'my-pwa';
var urlsToCache = [
    "./static/media/logo.103b5fa18196d5665a7e12318285c916.svg",
    "./manifest.json",
    "./favicon.ico",
    "./logo192.png",
    "./static/css/main.ac3e4c53.css",
    "./static/js/main.fb190471.js",
    ".static/js/bundle.js",
    './'
];

self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
  });
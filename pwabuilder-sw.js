self.addEventListener('install', e => {
  e.waitUntil(caches.open('tsar-v1').then(cache => {
    return cache.addAll(['./', './index.html', './manifest.json', './icon-192.png']);
  }));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

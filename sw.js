const CACHE = 'checklist-v2';
const ESSENTIELS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ESSENTIELS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Réseau en priorité : la version en ligne la plus récente est toujours
// utilisée quand elle est disponible, avec le cache comme secours hors-ligne.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(reponse => {
        const copie = reponse.clone();
        caches.open(CACHE).then(c => c.put(e.request, copie));
        return reponse;
      })
      .catch(() => caches.match(e.request))
  );
});

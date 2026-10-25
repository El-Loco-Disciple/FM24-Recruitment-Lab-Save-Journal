/* Recruitment Lab service worker: lets the Lab and the Career Journal open without a connection.
   Your data never passes through here; it lives in the browser's own storage. */
const CACHE = 'recruitment-lab-v3';
const CORE = ['./', 'index.html', 'manifest.json', 'journal.html', 'journal.json', 'icons/journal-192.png', 'icons/journal-512.png', 'icons/journal-maskable-512.png', 'icons/journal-apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Fonts: use the saved copy, refresh it in the background
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com'){
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // The app itself: newest version when online, saved copy when offline
  e.respondWith(fetch(req).then(r => {
    if (r.ok){ const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  }).catch(async () => (await caches.match(req, {ignoreSearch: true})) || (req.mode === 'navigate' ? caches.match('index.html') : Response.error())));
});

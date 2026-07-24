/* IRONLOG service worker — caches the app shell so it loads instantly and
   still opens (UI only — sync needs internet) if you're offline.
   Bump CACHE_NAME whenever you change any of the cached files, so users
   get the update instead of a stale cached copy. */
const CACHE_NAME = "ironlog-shell-v2";
const SHELL_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event)=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL_ASSETS))
      .catch(()=>{}) // don't block install if e.g. offline on first run
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event)=>{
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event)=>{
  const req = event.request;
  if(req.method !== "GET") return;

  // Never cache Google/API calls or the CDN scripts — always go to network for those.
  const url = new URL(req.url);
  if(url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(cached=>{
      const network = fetch(req).then(res=>{
        if(res && res.status === 200){
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        }
        return res;
      }).catch(()=> cached);
      return cached || network;
    })
  );
});

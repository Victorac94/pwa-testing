const cacheName = "myCache-v1";
const resourcesToPrecache = ["Joseph Mazzello.jpg", "Lucy Boynton.jpg", "Rami Malek.jpg", "The Grinch.jpg"];

// Almacenar assets en cache
self.addEventListener("install", event => {
  console.log("SW install event!");
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      return cache.addAll(resourcesToPrecache);
    })
  )
})
// Offline support
self.addEventListener("fetch", event => {
  console.log("Dentro del evento fetch");
  // event.respondWith(caches.match(event.request))
  // .then(cachedResponse => {
  //   return cachedResponse || fetch(event.request);
  // });
});

const cache_version_1="cache_version_1";
const urlsToCache=["./index.html","./offline.html"]
const self=this;
const preCache=()=>{
    console.log("precacheing...................");
    caches.open(cache_version_1).then(function (cache) {
     console.log("opened cache.............");
        return cache.addAll(urlsToCache);
    })
}
const cleanUpCache=()=>{
    caches.keys().then(function(keys) {
        return Promise.all(
            keys.map((key)=>{
                if(key!==cache_version_1){
                 return caches.delete(key);
                }
                
            })
        )
    })
}
self.addEventListener("install",function (event) {
    event.waitUntil(preCache())
});
self.addEventListener("activate",function (event) {
    event.waitUntil(cleanUpCache())
});
self.addEventListener("fetch",function (event) {
    const request=event.request;
  event.respondWith(
    caches.match(request).then(()=> {
        return fetch(request)
        .then(function (response) {
            return response;
        }).catch( ()=> {
          return  fetchOffline(request);
        })
    })
  )
})
////offline
const fetchOffline = async (request) => {
    console.log("you are offline and the request there isn't in static-assets");
    return caches.open(cache_version_1).then((cache) => {
      if (request.headers.get("accept").includes("text/html")) {
        return caches.match("/offline.html");
      }
      if (request.url.match(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i)) {
        return caches.match("assets/images/placeholder.png");
      }
    });
  };
const cache_version_1="cache_version_2";
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
    caches.keys().then(function (keys) {
        return Promise.all(
            keys.forEach((key)=>{
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
    
})
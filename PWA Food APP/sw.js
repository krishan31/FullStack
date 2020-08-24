
const staticCacheName = 'site-static-v2'; //cache variable where all the files store
const dynamicCache = 'site-dynamic-v1';
const assets = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/ui.js',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/css/materialize.min.css',
  '/img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
];

//service worker has been installed
self.addEventListener('install', evt => {        
  //console.log('service worker installed');         //this happens every time the service worker files changes and the we reload the page 
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

//activate service worker
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

//fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes =>{    //if some page is not in cache so it will direct go to the server and get the response and store it in cache
        return caches.open(dynamicCache).then((cache) =>{       //we cache the html page if it's there an return the response otherwise || it take the request further (fetch). then the res comes back we take that response open up the dynamic cache and inside that cache we put the new response so, now it store in the dynamic cache in future
            cache.put(evt.request.url, fetchRes.clone());   //evt.request.url = Key, fetchRes.clone = Value
            return fetchRes;
        })
      });
    })
  );
});

//Notification click&close event

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;

  if (action === "close") {
    notification.close();
  } else {
    clients.openWindow('https:localhost:5500');
    notification.close();
  }
})

































// service worker has been installed
// self.addEventListener('install', (evt) =>{
//     console.log('service worker has been installed'); //this happens every time the service worker files changes and the we reload the page 
// });

// activate service worker
// self.addEventListener('activate', (evt) =>{
//     console.log('service worker has been activated');
// });

// fetch event
// self.addEventListener('fetch',(evt) =>{
//     console.log('fetch event', evt);
// });

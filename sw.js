const staticCacheName = 'restaurant-static-v1';
//adding pages,images etc to cache
let urlsToCache = [	'/',
	'js/main.js',
	'js/dbhelper.js',
	'js/restaurant_info.js',
	'css/styles.css',
	'data/restaurants.json',
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.jpg',
	'index.html',
	'restaurant.html',
	'sw.js'
	];

//I have followed the lectures and extracted/modified code from it
//open cache on install 
self.addEventListener('install', function (event) {
	event.waitUntil(
		//open a cache named restaurant-static-v1
		caches.open(staticCacheName).then(function(cache){
			return cache.addAll(urlsToCache);
		})
	);
});

//checking for change/update in code 
self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					return cacheName.startsWith('restaurant') &&
					cacheName != staticCacheName;
				}).map(function(cacheName) {
					return cache.delete(cacheName);
				})
			);
		})
	)
});

https://developers.google.com/web/fundamentals/primers/service-workers/
self.addEventListener('fetch', function (event) {
	event.respondWith (
		caches.match(event.request).then(function(response) {
			if (response) return response;
			var fetchRequest = event.request.clone();

        	return fetch(fetchRequest).then(
          	function(response) {
            // Check if we received a valid response
            	if(!response || response.status !== 200 || response.type !== 'basic') {
              		return response;
            	}
			// IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            	var responseToCache = response.clone();

            	caches.open(staticCacheName)
              	.then(function(cache) {
                	cache.put(event.request, responseToCache);
              	});

            	return response;
           }
        );
      })
    );
});
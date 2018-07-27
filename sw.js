const staticCacheName = 'restaurant-static-v1';
//adding pages,images etc to cache
let urlsToCache = [	'/',
	'js/main.js',
	'js/restaurant_info.js',
	'css/styles.css',
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
	'restaurant.html'
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

self.addEventListener('fetch', function (event) {
	event.respondWith (
		caches.match(event.request).then(function(response) {
			if (response) return response;
			return fetch(event.request);
		})
	);
});
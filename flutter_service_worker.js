'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "14f1c0624ca2bebf5d2c615dae93a875",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/10.png": "f5fd08972c2e8e0cf6aec7e8ee9078bc",
"assets/images/12.png": "906a90372fda3b7dce6139febb88f66c",
"assets/images/13.png": "8d6f6cfa07a41b048460662aa0cdeca5",
"assets/images/14.png": "c917ec1d1739161bedf773bf58ecf79e",
"assets/images/15.png": "f20719c41216bd354c3cc992202c667a",
"assets/images/16.png": "56195294a97dc4273af3d26667913c70",
"assets/images/2.png": "b61e16fe01c58ba2fd10acd0c73f8bc3",
"assets/images/3.png": "fd8c0465615bec05949a04f1b473fb35",
"assets/images/4.png": "6e4927b6485d1e5be60bf9bff8b92220",
"assets/images/5.png": "a42213e1a485b8c6f6f9ba78df343528",
"assets/images/6.png": "580f1853ac1b0482f9c85d5fc634525c",
"assets/images/7.png": "5aa6b728503dcb9ecfd15d74ff48292b",
"assets/images/8.png": "0bd000dd3f6fd08b5c4caabe0dc878a1",
"assets/images/9.png": "8b5256b2b6ec7a1c14b679c75f4ceb96",
"assets/images/bg.png": "4db38284520250a9140f001a2e89cd1e",
"assets/images/blacklogo.png": "4e8c2fed7ff469b65773bf3b2f45b1eb",
"assets/images/l1.png": "b1dc33194cbc2f26346d93f96950cdca",
"assets/images/l10.png": "5de22d8343a8643169f04d309b268289",
"assets/images/l11.png": "06d38e58edb8d0063dfe1dbc699cbfc6",
"assets/images/l2.png": "f1846e341efb9fdf3db42941d7de016c",
"assets/images/l3.png": "3334188867d3c5c643ad2f6a7436682b",
"assets/images/l4.png": "f58cf16da6e397d151e32b9b68db5531",
"assets/images/l5.png": "35a606bc09aad27bf9cebc3a63da09d3",
"assets/images/l6.png": "76a3f1700901abe0a6cfd99ec2ea3d64",
"assets/images/l7.png": "69475e8ef9ecb3c051d92167a87813d3",
"assets/images/l8.png": "68f92d93f83b1839b66020f7d0469291",
"assets/images/l9.png": "0d8c047ffb99eedb8059a9d83d591010",
"assets/images/logo.png": "e13bd4580cd7602368cf933c1c6ce433",
"assets/images/register.png": "848103b634fd90627605d87790c17b34",
"assets/NOTICES": "8808715c68c16473384e4e1ddaab340a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a5870248a3d0ba3d5be94ececd5b958c",
"/": "a5870248a3d0ba3d5be94ececd5b958c",
"main.dart.js": "135f5df13aeec922873dc5df80e31262",
"manifest.json": "b419ff03076bf3db0835039f7d12a6ad",
"version.json": "c07b8351ffba46a65b86d12eb5cc644f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

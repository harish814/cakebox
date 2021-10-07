'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "9efe8baf49e1cc46cc78be9a008b036c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5a14e980076bfea9599c3d1504447a88",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc9d900516664ffa47e6a8a9015699c2",
".git/logs/refs/heads/master": "bc9d900516664ffa47e6a8a9015699c2",
".git/logs/refs/remotes/origin/master": "b05d66b3333e905c42a716cc7df6b2e4",
".git/objects/07/04a615ea39ad094d10229f8731082eb9865a24": "2549615611f5241c325e2735c3c00a70",
".git/objects/0c/cbcf4bdc741e54ff149c4503542aebd0c10ffd": "797d4875f5e36d8e9fef1facd3caea18",
".git/objects/12/5e7d677217070db0f9e3286cf91d13244d1e99": "3e09b6dd56fd2553eea4e29ef06aec66",
".git/objects/13/e0f1f95847401c9d79ddada086b345bc61fc07": "8e6630c40c519a6e7883098cd54684cc",
".git/objects/14/bf52312391cefec5133591e4f22319b4085f97": "822bc44f42068275d931ced194c3bc97",
".git/objects/17/37a85f78db531c4080654ad329a0902aa5cbd6": "7707bdae88844c5157b0f66d05283540",
".git/objects/17/6ac003b518097f0281499fadb97ca8bbf16ee2": "22c2e8e9a3eeed0ec22288011778b15c",
".git/objects/18/cd1b044c2fec9f3bbe8aef859ca2c2105c4669": "4aa28e94becd805af5e50dd6a694d23c",
".git/objects/1d/34b925391b7c911ec569b89ce0d9d4006b489d": "561cfecd30a8e4d1b2e4e70cd1a11726",
".git/objects/29/e3910e186f92ec01cf4c408e91da4953e24a7f": "24495d394ecb870c4684eed33e31c6f9",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3b/9eb6abcf9964bd1fbdbe409c927525a1f02073": "83d11807b44a316a8102f4fbf00c852e",
".git/objects/3e/6bbc3493b421c94f23888cc91cb7fce5106a43": "f76f8c19d72d6e7e8ab4467e794d375d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/e99fb9a50cd2cfde9c66c0eeb4985ae039ae2d": "9a2615e7a54cc9ae99e2b6456e21eb4b",
".git/objects/57/2bd68bbcae2eea115d4305364220d3112434a8": "ca1aecd5d1b654ce4d2247735126a3aa",
".git/objects/5a/2995088df7b3cd073f19210320d1ef2e07a384": "a86d5777134cdcb61ab4661edd33962b",
".git/objects/5c/6d5fd1d5a547274530c8a1a4049a8e39a25195": "bb674443e81d0bebd54c2e290fdcd517",
".git/objects/61/e93ca12b3cb174f71a7553f4c4ba3d893cc100": "d4eb40c05b5cf934967ab9b6013f68ed",
".git/objects/63/686f9683b2ae6a7d7144958308f90ba30330ff": "988ec72576f03a4d6c25819549cf176c",
".git/objects/64/2fd1bd27c281f41e21f1a2f001463ce67b3990": "986d3220fb8191dee39c23b96d9f5ee2",
".git/objects/6a/8c6a01393f1b296917563cc18dd4c106bfc7cb": "81a15cd7dbfa23e58fef13f21edb595f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/9c945c7b0f907135e05a9010c7412609e30ca8": "ab9642290bbbda3b7f7a972b188563a7",
".git/objects/85/fa51c7a60ae2002ed8a7764a38add8e4b54823": "0285d77c31bee822885678c15f78955c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9d/d66ef6e06e32b88d94e074e4598eee7f2cc5bc": "5f662923917ba121bb229bd44e7019c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/1c2de5ace793fc2dfa437c7d388c22fe1e2cc1": "89c6616877f3368d1f9a78feb5ba0856",
".git/objects/ad/c79aa069433d4bc8bc8a8904b5091012586d42": "60dd7393891961b5ac37b0c07a2e0dc3",
".git/objects/b0/27af0015cbc124eaded0f42e0110eb34dec715": "df41627f2d61a9794f0923e0c6af6bc7",
".git/objects/b3/517ea39dba9e7bafa75db495dda80de4cd19e7": "8f510b3459bbe2f761b68d3138af3624",
".git/objects/b3/d6fa7cf9c83d6f24fc7de0bfba97d22c627b18": "2cbb58eac9cff8a55603a6f85c54e2b4",
".git/objects/b5/e9ead3b8d51f3fe73fb3f952c79b47a164c04c": "62cb484c5428435779e6f4e1a7c87707",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ecad9c157c6f739881d6c6c20ce003f1667029": "e821832b5ad7b6ee93f19cb8a219f81f",
".git/objects/c5/9ec677d380155a6c7b724eb308b4fb36f2468d": "73999a71e23c012d1658f056c885fab3",
".git/objects/c6/b16e3b2ee9820c2793296d9aa8694e7e5e8508": "006d5c9dd293d64f945e86ddd4a3fa8a",
".git/objects/ca/ca6c3c230a6c586ae6e32a3e647ea8c0dc01bc": "6aa1578513fc17ba68acc10c633dda12",
".git/objects/d2/25cf78b670bdd3acc3250128b52aef11315def": "4038035f44cb71248b37bed944f3fa6a",
".git/objects/d3/b2eb927b15e2594b19740703afe0ca77db48c7": "f735b1c1c78440ab63f1771a342fc13b",
".git/objects/d4/ab29d2f4fd73ff1b13225340fcbe43e367c778": "3126fb00e72899ec918c0d0df071202c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/5a86576a97fd62374aa91bc758e7d95028b5e7": "585a44935e627bf1e96bad1b790cab56",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/ca4d392a6e065786f15e82740c1a8aa9158755": "14830a93741dc2fd60be9a3c86d6bae3",
".git/objects/e8/9545c50fc435f1bd53b8dd31ef4b09ff9cf43f": "7ad0a51d39741bf66806ad78acf9c0c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/f0cb58277f49011e4cf8eb03bad42b15d3834e": "b11bb0f6900e79d4ed661f95c1c17dc2",
".git/objects/fb/915451bcba63047b3d2df6ed3f388511b74b03": "7fc3f83afa422dbe6895db229569a8d5",
".git/refs/heads/master": "db90ee14875af2b5e7b6363c66e72aee",
".git/refs/remotes/origin/master": "db90ee14875af2b5e7b6363c66e72aee",
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
"index.html": "0e6df2d1a1a0cb420b6886527235b21e",
"/": "0e6df2d1a1a0cb420b6886527235b21e",
"main.dart.js": "02e6f3e16f926c4eae7d2538fead438f",
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

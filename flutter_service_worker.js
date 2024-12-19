'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "fc96e5f380f2005ca9fe859dc92ba8ad",
"icons/Icon-192.png": "9380f051034e27b322582ce7d819dfd6",
"assets/assets/json/map-internal.json": "0511f8ed32ed76b694f2b0b5e05b6e98",
"assets/assets/json/fun-easyarty.json": "07b5f6042daee30d180cbce369e04343",
"assets/assets/json/fun-internal-calc.json": "57647aa0cb783d0a09d7802a15463865",
"assets/assets/json/map-mattw.json": "9a4653ecef186bef3341c590d85e703f",
"assets/assets/images/icon/arty.png": "736eec3c005e1ddab4a9ca171411694c",
"assets/assets/images/keyboard/Slider.png": "6dd2ba96f294b05be4f9e6ce7bf35fde",
"assets/assets/images/keyboard/IncreaseAndDecrease.png": "72aaa93c129acc051d8385ed76ed7acd",
"assets/assets/images/keyboard/IndependentDigit.png": "f3b6f826af8dcd5b6f0169c28b67f477",
"assets/assets/images/keyboard/Number.png": "3e71c568d9456e3cc9cf941845c79090",
"assets/assets/images/keyboard/Speech.png": "d2b563f38295fde0cb463fcbbd711f66",
"assets/assets/images/maps/map-backdrop.png": "9253be7c96272c7640733627603c277d",
"assets/assets/images/maps/Carentan.png": "050a61341b110fb28a3870401f0fdb81",
"assets/assets/splash/logo.png": "368e600a3cc05f9acda4c2e77b859047",
"assets/assets/splash/startup-icon.png": "e971c708be0f1c07d4731c88241cfff6",
"assets/assets/fonts/Ubuntu_Mono/UbuntuMono-BoldItalic.ttf": "91d425ae7be0c07c93eb2fe6f08ab37e",
"assets/assets/fonts/Ubuntu_Mono/UbuntuMono-Italic.ttf": "027c9e013a499b36e8c7f4b0f2d4f897",
"assets/assets/fonts/Ubuntu_Mono/UFL.txt": "325a1a9029112a2405e743c7f816427b",
"assets/assets/fonts/Ubuntu_Mono/UbuntuMono-Bold.ttf": "d3e281ca75369e8517b3910bc46a7ed0",
"assets/assets/fonts/Ubuntu_Mono/UbuntuMono-Regular.ttf": "c8ca9c5cab2861cf95fc328900e6f1a3",
"assets/assets/fonts/Noto_Sans_TC/OFL.txt": "e93be33bceec2eeb74fc662173b01b23",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Medium.otf": "3cf084f9bb05158d53e7c239899aaccc",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Thin.otf": "d5e0d7ee630e37c71782a98d82c9d5a6",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Regular.otf": "d6b43f6600389d7442f317adfbbd9942",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Black.otf": "80ea41b950b6a39c5985f0ff268205a7",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Bold.otf": "503ece9832c8660172b2e9bf6d864028",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Light.otf": "ffdd19a3f9db8c71b26f926be3eed02a",
"assets/assets/audio/coins.wav": "4a4fff94c9ee5742329863ce86f31368",
"assets/assets/lang/zh_CH.json": "c37b75ca70c207f7211704f0553e9a58",
"assets/assets/lang/en_US.json": "31d69d0ed5deda29c120117abc337b67",
"assets/AssetManifest.bin": "87923331b433a228e6d3a8c7e032810c",
"assets/NOTICES": "b1634b0a6973505bc8c843ed05697983",
"assets/AssetManifest.json": "ae50d76bdfc92be9b2225a5c27fa505f",
"assets/fonts/MaterialIcons-Regular.otf": "13496290461f7434fa469dfb82780f62",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/FontManifest.json": "aaa7a11bbcb586bfc6669c6a94c00c38",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "2247a8d540afd816c25390c77d714a77",
"version.json": "683e85c11de97eeaf59dc906541511b1",
"manifest.json": "ddeda56f1a74a47d6d842470fd5db3a6",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"splash/img/dark-4x.png": "34f408d650fc8bffb8c53fc3793e7b08",
"splash/img/dark-2x.png": "6fc4388a5e0bf494b064210765a55964",
"splash/img/light-2x.png": "6fc4388a5e0bf494b064210765a55964",
"splash/img/dark-3x.png": "deee5bebad45a68f0afcedf67de32931",
"splash/img/dark-1x.png": "1fa3c595fa5e1c460c9c66d042280a7f",
"splash/img/light-3x.png": "deee5bebad45a68f0afcedf67de32931",
"splash/img/light-1x.png": "1fa3c595fa5e1c460c9c66d042280a7f",
"splash/img/light-4x.png": "34f408d650fc8bffb8c53fc3793e7b08",
"index.html": "efbc5b77043fa28482e50f8a05e88d29",
"/": "efbc5b77043fa28482e50f8a05e88d29",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "fc96e5f380f2005ca9fe859dc92ba8ad",
"flutter_bootstrap.js": "bcdd5c353dcabfe7aaa7779865e930de",
"main.dart.js": "dfe700a07fe89e10e7678daaad2190d4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

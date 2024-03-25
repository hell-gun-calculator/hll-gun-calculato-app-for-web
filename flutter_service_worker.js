'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6e1f2e6b9277c98185f326250a200fa8",
"splash/img/light-2x.png": "6fc4388a5e0bf494b064210765a55964",
"splash/img/dark-4x.png": "34f408d650fc8bffb8c53fc3793e7b08",
"splash/img/light-3x.png": "deee5bebad45a68f0afcedf67de32931",
"splash/img/dark-3x.png": "deee5bebad45a68f0afcedf67de32931",
"splash/img/light-4x.png": "34f408d650fc8bffb8c53fc3793e7b08",
"splash/img/dark-2x.png": "6fc4388a5e0bf494b064210765a55964",
"splash/img/dark-1x.png": "1fa3c595fa5e1c460c9c66d042280a7f",
"splash/img/light-1x.png": "1fa3c595fa5e1c460c9c66d042280a7f",
"index.html": "e30a286890ad5a783ea7e898265df689",
"/": "e30a286890ad5a783ea7e898265df689",
"vercel.json": "714362acc983445bd728e93bb5e0670d",
"main.dart.js": "5a857262e924c90777527adf381800cc",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "fc96e5f380f2005ca9fe859dc92ba8ad",
"icons/Icon-192.png": "9380f051034e27b322582ce7d819dfd6",
"icons/Icon-512.png": "fc96e5f380f2005ca9fe859dc92ba8ad",
"manifest.json": "ddeda56f1a74a47d6d842470fd5db3a6",
".git/config": "63329779fa82b9e84352fa83847fa33c",
".git/objects/59/716ca725c92deae5522e6bfe5bd962a5bce602": "1ccbad2e03dd77d8dc14b56ef3f190e1",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/bd8e45f82e16d5bb90b6428b3fe7d956308a98": "5a806427e4d647c9fdc4a947865cbe0e",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/b5/8b603fea78041071d125a30db58d79b3d49217": "f331c1c98f3dca3e1de520e06d81e67f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/923198d13e08dc038d1f32b41c7c8075465ad0": "1c5d474389c1f277b8bdcd2654e70060",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/90ac8462fc85488064b6aee069fcd5566e784a": "79d8bef4824bb13e9c4e81f1469df8dd",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/f4/aefe628f77210499a976692f8447407c42cb08": "90273b1b3f9b60aaf01eb27cb711b496",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/dc31c28aad5f1852563d83902838345fab2cd9": "712b5a38f329dd1ddf9d14d988dabd93",
".git/objects/c0/d0a230fc467ca898b6f329516ce3d1db3021f7": "3d8e1e50b6a881c6a7639715cec16e6c",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/e4/2269faa5924cca0180ea188c0c988017f1235f": "7fd0ceb91c0a95fc26562baae6695937",
".git/objects/fe/be6bd02ce72787aa418407c22ec8274e4ff8b6": "42081ea0fa4492e642a802ea0721dff5",
".git/objects/c6/730e6e7a70e54b3b281c0d3116fe3f3814ebb5": "5a23749651e2ce8b763a0ddc8384a52b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/3f243bf6af1d4f0eeb12be367e5a440b64b022": "f689d5a628ec089439cd2cfab899a7cf",
".git/objects/28/febe62ed3e9d6c1698eab0fdd9d4df0c40da2f": "5776ef674068b798b4c00ee3c565f68f",
".git/objects/7b/99d3cd8ebf54bcf5dc76ccd6cbd02733101f31": "251cd15a4f297b3f8a724b6b1a9acdfa",
".git/objects/8a/84b204d48df7b5fe3b624651015b2bae0b3a79": "d37d1e34f0210b3c12ec31cb187baee2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/5b/7c22289edaa5876b2a5ea552770791cea44b5d": "cfc9d7e7d22cdb1632a400d98e0a8357",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/97/05f5e4f601c9df27ec4855d1cfe0ffe5497e79": "9d246309c9d7d752032476bb36f4aa92",
".git/objects/0f/6607dfed40175cf7f58a81162031a47bd64dcc": "f77de16995015293d663247c52792be5",
".git/objects/0a/c5c21ce1d60a0ff2affb3c5af421e595fd04f8": "ebab95b48a3eacf9dcb4c98e363790e0",
".git/objects/90/89148b936b8e901f1e789e5ea28d92c4d0ac74": "bc28c97254995a13e77f9f3d87cb0d54",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/402d6d834b50fd3ad8a310364a369361a89580": "964fc6edd969c6b58819ab8975024054",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/2866b61d8a0adcf16da852d4cc1585ceee947a": "125cf99b5b31dd06be9fe4ac1dd9d470",
".git/objects/77/5fa07885d190df9f07222df94d3d1b76ac2995": "1d7a12da02207d456cb0ea25be1c6556",
".git/objects/24/643cc37449b4bde54411a80b8ed61258225e34": "1107015fd40ca96632ab86be54b74b1c",
".git/objects/82/95ab8f5d38680c95629a4074b0cda419e0507a": "a1ca8b14810e887803a8ec9a8d5fc400",
".git/objects/7f/9c44404531036643524ea4e95a9c30f8cc780f": "14b2080380c7d7747c4594f2b46f4b05",
".git/objects/14/90aa240523d6d1a37416b2d7e1ed508591d639": "e412a196fb098a921896bcc9f1dc112d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "979f34adf5c5b4ade0640fb8ddd04550",
".git/logs/refs/heads/main": "979f34adf5c5b4ade0640fb8ddd04550",
".git/logs/refs/remotes/origin/main": "ead650f77e9f655821e1a53ab4d22fc2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c0bfb4b78e01be750ef3d7d915a871cd",
".git/refs/remotes/origin/main": "c0bfb4b78e01be750ef3d7d915a871cd",
".git/index": "8edecc116d0326ed90349fc07871fa50",
".git/COMMIT_EDITMSG": "b185038c6e3a1786e0d2bc13d67d1061",
"assets/AssetManifest.json": "b1d23ebe2c66c6e71e4700ab73e01983",
"assets/NOTICES": "77eaeddff2ba306ced5b107d50255d41",
"assets/FontManifest.json": "aaa7a11bbcb586bfc6669c6a94c00c38",
"assets/AssetManifest.bin.json": "ab89abc8acf43e752051ee91d6e95a45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6f8ef434a8e177da5c7bd6d20cdb3046",
"assets/fonts/MaterialIcons-Regular.otf": "e1ddd20c3583d6ac91e2f20651c91173",
"assets/assets/splash/logo.png": "368e600a3cc05f9acda4c2e77b859047",
"assets/assets/splash/startup-icon.png": "e971c708be0f1c07d4731c88241cfff6",
"assets/assets/images/maps/Carentan.png": "050a61341b110fb28a3870401f0fdb81",
"assets/assets/images/maps/map-backdrop.png": "9253be7c96272c7640733627603c277d",
"assets/assets/images/icon/arty.png": "736eec3c005e1ddab4a9ca171411694c",
"assets/assets/images/keyboard/Slider.png": "6dd2ba96f294b05be4f9e6ce7bf35fde",
"assets/assets/images/keyboard/IndependentDigit.png": "f3b6f826af8dcd5b6f0169c28b67f477",
"assets/assets/images/keyboard/Number.png": "3e71c568d9456e3cc9cf941845c79090",
"assets/assets/images/keyboard/IncreaseAndDecrease.png": "72aaa93c129acc051d8385ed76ed7acd",
"assets/assets/images/keyboard/Speech.png": "d2b563f38295fde0cb463fcbbd711f66",
"assets/assets/lang/zh_CN.json": "5bec78c1b27f0f0d97b042a7869d8df1",
"assets/assets/lang/zh_CH.json": "0b2c356fa7c56c4410ace0a81c690d94",
"assets/assets/lang/en_US.json": "c786bb80f78d6cde2131f7cafaea15f9",
"assets/assets/audio/coins.wav": "4a4fff94c9ee5742329863ce86f31368",
"assets/assets/json/map-mattw.json": "97a909cddba4ac6e5448cceac9ea6c72",
"assets/assets/json/map-internal.json": "0511f8ed32ed76b694f2b0b5e05b6e98",
"assets/assets/json/fun-internal-calc.json": "57647aa0cb783d0a09d7802a15463865",
"assets/assets/json/fun-easyarty.json": "07b5f6042daee30d180cbce369e04343",
"assets/assets/fonts/Ubuntu_Mono/UbuntuMono-BoldItalic.ttf": "91d425ae7be0c07c93eb2fe6f08ab37e",
"assets/assets/fonts/Ubuntu_Mono/UbuntuMono-Bold.ttf": "d3e281ca75369e8517b3910bc46a7ed0",
"assets/assets/fonts/Ubuntu_Mono/UbuntuMono-Italic.ttf": "027c9e013a499b36e8c7f4b0f2d4f897",
"assets/assets/fonts/Ubuntu_Mono/UbuntuMono-Regular.ttf": "c8ca9c5cab2861cf95fc328900e6f1a3",
"assets/assets/fonts/Ubuntu_Mono/UFL.txt": "325a1a9029112a2405e743c7f816427b",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Regular.otf": "d6b43f6600389d7442f317adfbbd9942",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Bold.otf": "503ece9832c8660172b2e9bf6d864028",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Thin.otf": "d5e0d7ee630e37c71782a98d82c9d5a6",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Light.otf": "ffdd19a3f9db8c71b26f926be3eed02a",
"assets/assets/fonts/Noto_Sans_TC/OFL.txt": "e93be33bceec2eeb74fc662173b01b23",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Medium.otf": "3cf084f9bb05158d53e7c239899aaccc",
"assets/assets/fonts/Noto_Sans_TC/NotoSansTC-Black.otf": "80ea41b950b6a39c5985f0ff268205a7",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
".idea/vcs.xml": "f990e6d29e03715a04983dd2f51d3595",
".idea/workspace.xml": "d9cbcecc6e4be4bdca02f8c3812fae60",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "2c8bb2b57bd6108d55833896a6d1d235",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0e5c1be6868608bd53a58638c11a84fe",
"version.json": "81e19cc7001e65441e2e446b747b9e41",
"splash/img/light-2x.png": "6fc4388a5e0bf494b064210765a55964",
"splash/img/dark-4x.png": "34f408d650fc8bffb8c53fc3793e7b08",
"splash/img/light-3x.png": "deee5bebad45a68f0afcedf67de32931",
"splash/img/dark-3x.png": "deee5bebad45a68f0afcedf67de32931",
"splash/img/light-4x.png": "34f408d650fc8bffb8c53fc3793e7b08",
"splash/img/dark-2x.png": "6fc4388a5e0bf494b064210765a55964",
"splash/img/dark-1x.png": "1fa3c595fa5e1c460c9c66d042280a7f",
"splash/img/light-1x.png": "1fa3c595fa5e1c460c9c66d042280a7f",
"index.html": "4619e8fcc56d3b38c4b99a418f4656a0",
"/": "4619e8fcc56d3b38c4b99a418f4656a0",
"main.dart.js": "ff70e63de03cd4bf3e1c780e36bc1d2f",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "fc96e5f380f2005ca9fe859dc92ba8ad",
"icons/Icon-192.png": "9380f051034e27b322582ce7d819dfd6",
"icons/Icon-512.png": "fc96e5f380f2005ca9fe859dc92ba8ad",
"manifest.json": "ddeda56f1a74a47d6d842470fd5db3a6",
".git/REBASE_HEAD": "91044696b14a182858dd38fc64bcf439",
".git/ORIG_HEAD": "91044696b14a182858dd38fc64bcf439",
".git/config": "579d367d24a44b04d760f7061efa6997",
".git/objects/59/f562f9ac5a701cb5ca55f928f0b899d1aed730": "ce764779bd1e85743f2115212ddfe447",
".git/objects/59/716ca725c92deae5522e6bfe5bd962a5bce602": "1ccbad2e03dd77d8dc14b56ef3f190e1",
".git/objects/3e/6101f2a31438efaede4a1ee000f207714696cb": "2ffd4da57eb3e46218f5521c31535f10",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6f/7b32a073ef43afa6210d5284374f691bda22ae": "2c015d7e0ee32ca8b1e4080d317657ba",
".git/objects/03/2d398a57e68bb062ec483c227bfafe7d0e20a0": "afeecd7bfc639d0dbe53a63d5dfb9e9c",
".git/objects/03/d2426754fd8a523442ef5691df0daa09b62b6e": "08da16a913271373746380638fedfcbf",
".git/objects/04/4a0a5f1f2402a4bd39ef98d7b5ab363854d6b4": "7e28123ce516141c7c00512e1ac1aae2",
".git/objects/6a/ab2514aba56a0eda39bac59cf981eeffe492e3": "193aaf359866b5840afb4fede36592c2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/fc7cc60ecfcbe8b8cf3be52e585784cc25475e": "ec10c0125c6209c6808cc1c5e19576c9",
".git/objects/3d/bd8e45f82e16d5bb90b6428b3fe7d956308a98": "5a806427e4d647c9fdc4a947865cbe0e",
".git/objects/67/33b9f3f0de887b1ad2b5d8b6bf377c1e6c8f28": "04dff7b86abeefea25472d87bedf5190",
".git/objects/0b/11f0185471d89eee6a964ae4624bc1a522320f": "be367954aa0af06d0d4d2508788cdc0e",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/5f/146b2245fcf6f46f77a85dd4e9805d5eada7e8": "054670d8888b83048b019473b0b72533",
".git/objects/5f/39399d544e5262f9a3d70db896962cb8f8c3aa": "19ed3d2ad5bbb2697ffaaeec0b42358c",
".git/objects/05/cfcac114b6a3074866e3f5636dc2548623d4da": "8bca94349400b24f3e7d3deba78324fb",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9c/89906f83604818cdbbac889f379beaa2a13b1c": "425b25b567aacdf7e4a42a6d8cf5b837",
".git/objects/a4/1d664b0fef19ff31a669f3b5372e74d5e4df4e": "07ce0dd63bc63ba5d78f7ffbbfabd166",
".git/objects/b5/8b603fea78041071d125a30db58d79b3d49217": "f331c1c98f3dca3e1de520e06d81e67f",
".git/objects/ac/7889c527e986b904a06e34ee3bf11016a747a6": "3fe24b698e7330216396133507e76fda",
".git/objects/bb/6840c9477c9c8762dc3c5e1b254d1606e9fed4": "6062241729de6abc48531d85e75b3246",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/923198d13e08dc038d1f32b41c7c8075465ad0": "1c5d474389c1f277b8bdcd2654e70060",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/ed9140924c24782f1d33e183ee8e9819086ea7": "fb4bc1cc3187605e5459738f3db7be2f",
".git/objects/da/ac3d6dd8ab0e3f5002c09fc012abe81095bfbb": "9229c8280cf37235d1b4c7e9b27458a9",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a2/7c6970ff30d8942c63edb66d14e4116052e6d8": "9041fc7dc7c30f2e0b3386aefd121085",
".git/objects/d1/cd8259549919563f5b2f253e56c23b7a2e2626": "3b507c0cc36a660bc05c4fc0859a9d6a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/3bd285d38b3ba55d5798bcbf17546f3ae90ad8": "d8694aeb6a98fab709984a4e464b1922",
".git/objects/ab/90ac8462fc85488064b6aee069fcd5566e784a": "79d8bef4824bb13e9c4e81f1469df8dd",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/c5878615346564cca52bff1403d2deeff0a157": "ee956fe7191a71bd9de8d26c5bd44909",
".git/objects/f4/aefe628f77210499a976692f8447407c42cb08": "90273b1b3f9b60aaf01eb27cb711b496",
".git/objects/f3/68e6e6b090f5ab4f0de75d3e6ec47093aff94f": "27b7e8afdd13255aab0e548caacec6da",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/dc31c28aad5f1852563d83902838345fab2cd9": "712b5a38f329dd1ddf9d14d988dabd93",
".git/objects/c0/d0a230fc467ca898b6f329516ce3d1db3021f7": "3d8e1e50b6a881c6a7639715cec16e6c",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/cf/1cad21a9e2f2676d9a238217e2e7ace328175e": "9d8a0b886b79651b70b903b0e242bf6f",
".git/objects/e4/8145099ce4bf6474c585950e75406615390c82": "ed80624ee84b57842150d5ceeb3ebc44",
".git/objects/e4/2269faa5924cca0180ea188c0c988017f1235f": "7fd0ceb91c0a95fc26562baae6695937",
".git/objects/fe/fe4a23fc67d855f9f534ffd13bbb5e0e850873": "96dff04a7fc214436de1b9ba08355fd9",
".git/objects/fe/c2a3a5e182f92a98ce1972f5fecbc785f47250": "0a805166a7b567dee6107fbee0911706",
".git/objects/fe/be6bd02ce72787aa418407c22ec8274e4ff8b6": "42081ea0fa4492e642a802ea0721dff5",
".git/objects/c6/7d9af5b1db6ab19b145e278c70cb160ff9572f": "d92b54b1827c86819f1e6fd337445174",
".git/objects/c6/730e6e7a70e54b3b281c0d3116fe3f3814ebb5": "5a23749651e2ce8b763a0ddc8384a52b",
".git/objects/ec/3fe2b3f4646c29ea61b128aa78a00cacb3d783": "ccaae7fe45600482e69eadf36c4ff3d4",
".git/objects/20/7ad2c1c60a6f824bc4ebb9abc297258ad074a1": "3499bfc2e81f58ff7f66c79529932b96",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-1e30586a69c07dffe0db732bd9a3117ee0169986.pack": "b520eac8763d61531d06bb06a4b5ac79",
".git/objects/pack/pack-1e30586a69c07dffe0db732bd9a3117ee0169986.idx": "f1f6beea34baf542c1452fed7eaaaafb",
".git/objects/11/3f243bf6af1d4f0eeb12be367e5a440b64b022": "f689d5a628ec089439cd2cfab899a7cf",
".git/objects/11/df9ac6f859160bb2dad59798abba3da9a6800c": "d93dc1ec7ed7818dc388849d93da0f6d",
".git/objects/11/2ca6d0f11b698d5d1934edff38c17acf53f092": "d8398a0ce08180367e677165f83f6a21",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/87/8c7f7e2b68f62f877fadd84c005bec2451cdbf": "b2a6f97b84905e72f05d61bfbaf799ed",
".git/objects/74/3fbbaa3eaa7e76d78e85ef30d1b509ef209639": "92eca073ff7f09155f74ef8853100833",
".git/objects/28/febe62ed3e9d6c1698eab0fdd9d4df0c40da2f": "5776ef674068b798b4c00ee3c565f68f",
".git/objects/28/c0d4ff7b7c4574039746c76806adc3c2745cbe": "920ec5b31b43878629b3736f78c2ef40",
".git/objects/7b/99d3cd8ebf54bcf5dc76ccd6cbd02733101f31": "251cd15a4f297b3f8a724b6b1a9acdfa",
".git/objects/8a/632679b642cdd0304c84a3c1c92368f7768797": "8e320b027badb8741756d1c0b5c50afa",
".git/objects/8a/84b204d48df7b5fe3b624651015b2bae0b3a79": "d37d1e34f0210b3c12ec31cb187baee2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c93d86a61fbe276bc2ce7bda5ba1a1a9a0b2b7": "e824d51854eec3f22bced91015962e35",
".git/objects/81/b0720e082d84a9f8b744fb8703f3ee51a0fe4f": "6d32598794f068e8bee08829eafe6a75",
".git/objects/86/191cc3425ca9b5b5974424a24565c809a3f389": "1da5b01824d32f0678a8b937ff7d14ae",
".git/objects/2f/9ae08f2591b229398540136667ca48de817850": "2b2404ce81724b72c1d0448f515c7a6e",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/5f851d4945767f0e3cdbfd734f2ce76b0859e3": "f0d756a1a1d01bb1d3b5eb44cc693265",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/f98571e13f26f6a17f6d03064c7480d7fc2d90": "e0872db0dd5c1e70e8a9b97839627499",
".git/objects/9a/2632a057f7e13342ae3a920dbdf91dc9293fc7": "0a89481b6443f7483b1b6cf2a4f8fb41",
".git/objects/36/ba07b3d1358714c60ca4e153f200b7df2fecc5": "0a5c03df2c0bccdcbafae18ec2cea362",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/31/9f6fb012cacfc96c1d12cd4f7f09fa998c0f18": "fe9a5accc2c21588f479ac8493392539",
".git/objects/96/ca0d2311d2806bbe4d03d2bc1b58bc8487cd86": "c584f898e6b21144943843c18a9de910",
".git/objects/3a/690c5970553ddca54821189e575b4109ece781": "e6b79089b2ddac67e55638b3908a99e3",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/05ddda13a660303acd50c780096039c49d25a6": "8d2620daa4d29555486a946f3c0093bd",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/5e/6e8d1c66ccd8a8f318b949d0e0e623ec6df608": "b714aafd0210d38ffdf868ebf5d26b13",
".git/objects/5b/7c22289edaa5876b2a5ea552770791cea44b5d": "cfc9d7e7d22cdb1632a400d98e0a8357",
".git/objects/37/c53fe4712a5d0859692d89d895cf4534ea5b39": "aec0299f49ff4f3f93c3ddf09017e1a7",
".git/objects/08/e71f8cc6b16efeb2123b985a146af03e0ddbd4": "f6ea516a1ea454a59971e30182337758",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/3d1c60cee110c32bc42cb7f110b4a10954cc46": "b9f43bdf79426139e3e18d818ba4a119",
".git/objects/6c/03af0e83c745dae6016ee9a1bd1086e15096a3": "ac6de00acf93cebcf85bb7727fbf94a9",
".git/objects/39/a38b99ce6af3fddd083e500e0573bd3cb3260f": "6c4c0c1c20581c039bff356e8103d775",
".git/objects/99/77b7cb3200b7964ecaed6fffa4983f83a9c68e": "df539a60e1583c153b0a67d738e0a13e",
".git/objects/55/cc63271f9ccaf4fe004880cac7e2d8a752fbcc": "0b5c44e6d2ad464a3408644637a4233f",
".git/objects/97/05f5e4f601c9df27ec4855d1cfe0ffe5497e79": "9d246309c9d7d752032476bb36f4aa92",
".git/objects/0f/6607dfed40175cf7f58a81162031a47bd64dcc": "f77de16995015293d663247c52792be5",
".git/objects/0a/c5c21ce1d60a0ff2affb3c5af421e595fd04f8": "ebab95b48a3eacf9dcb4c98e363790e0",
".git/objects/90/89148b936b8e901f1e789e5ea28d92c4d0ac74": "bc28c97254995a13e77f9f3d87cb0d54",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dd/4bc5671a68342af62aee4af61c8fe4b7c29405": "fd68484bdbd6b3373154a6b84798a676",
".git/objects/a9/476c2b7725c65c96b90a371adcbc2f39fa2f91": "b2d5682c11e8c4531c78d68478efb930",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/59e65cf07c2bf14d977cd21822df3152bc8cf8": "8295a5ed5a56f9bfd0d8f9406097e802",
".git/objects/a8/b2ac9e5d4c550ac21083121b5ab0818719aba6": "2efa543c109675f56fb4c2b410c9c383",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/de/d08a3efd2538d0ea849f2c35bacd58502f3248": "e858bc343cfec484def5799c8029c9e2",
".git/objects/a6/60afc092a4500dc581910b06b9f8f749b7b436": "a5e799f68c532579c3fd4495d58e5e7c",
".git/objects/a6/098654a741fb2a6fedc959c9936f76f36538b2": "a6c3e202d07a1fbf65f3143b3d237947",
".git/objects/a6/d96a535de7a23a414e21628cd0da1a052fe545": "9d4543a8d92918acd3297ad8eafb2d79",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a0aecd097f2da80cfc8e669e3767e37c66ecad": "04c6a3f76aae92926d39930d84b028e6",
".git/objects/a1/10f1d4adcebe054f6956d1894630dfd6198879": "714ef4111438e17d21cc1ccb35feabfa",
".git/objects/ea/5ee51157a05eef3143688a85795bd3d0ce7747": "4c80c40759ac5ccedd7ff1bfa6f14651",
".git/objects/e1/402d6d834b50fd3ad8a310364a369361a89580": "964fc6edd969c6b58819ab8975024054",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/5555a7e91fec3c3ebcf74481d64783d914f941": "37313f53115ff75f963b423a4e7ae572",
".git/objects/f0/b0876289527ab62abaec41dd010fb534b0f571": "774e87004cce577b8d170ec46436f0c2",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f1/992d4de8f5cce67bc5b2e1509cd2037b7e600e": "a0e1b39360d3fa29ca0fa1bd310fe19e",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/cb144300ed187cd5e3a6b4db23fefa7c13ffbe": "47b9741abed3b5456b1ea08bc25e8bb3",
".git/objects/41/2866b61d8a0adcf16da852d4cc1585ceee947a": "125cf99b5b31dd06be9fe4ac1dd9d470",
".git/objects/77/5fa07885d190df9f07222df94d3d1b76ac2995": "1d7a12da02207d456cb0ea25be1c6556",
".git/objects/70/ed059f5cfd7f48d79c823dcad2672afd066d1e": "d09ca72c7249f87d73957b50d8f827ee",
".git/objects/70/5916a35ad7c9c97f3091adb4ddc6f748b70fe6": "5339ee41b8c8aaf614f098b56cc82c3c",
".git/objects/1e/7b37ffbf1a5b63c70f99dd8d33895cef2d5250": "de27fff6bd4439cb1da11b7554a9c026",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/cd7091cbd080cb3bf7c4b65204e8bccab52ed0": "9f8ee696d497b250f3f3b5ab2d36b791",
".git/objects/24/643cc37449b4bde54411a80b8ed61258225e34": "1107015fd40ca96632ab86be54b74b1c",
".git/objects/23/5cd2a4eb8d71366cb51c2869b11879fc283e1a": "9f8f59fd3f9153fd9955925914c75003",
".git/objects/23/c3d8a652052a9686244a1e3f5b323b36589cb2": "51daffca066ef119e73f1b6e2e500b72",
".git/objects/1d/d6e18f5bb92ddefa93f60e2fc5bd902315b88d": "cac6899800aca3a9c7ede6d6e5e58428",
".git/objects/1d/e6f2dff9c30411aa5880d046b8e4a3d7f36359": "3b3289a06fc48744d7a932747c13d4f7",
".git/objects/82/95ab8f5d38680c95629a4074b0cda419e0507a": "a1ca8b14810e887803a8ec9a8d5fc400",
".git/objects/49/226d1f94f19299a3f299ae090e79a5721f8918": "3029cdbe018ecf2524dc3a4e8ab5a30e",
".git/objects/47/d679acbcbfa23b6d2d8d94a0923ad549671a3b": "7c13def65577aabdb2833b250cfd8d38",
".git/objects/8b/6c9224be5f13114c8ed624ce89752253ace0a7": "bd622f8c639d3d307bf4447cbe1dffec",
".git/objects/13/ab373eddf65126c4e0b45f55196cc08bcb82eb": "8b53261176a7882b5b75769efdd5995c",
".git/objects/7f/9c44404531036643524ea4e95a9c30f8cc780f": "14b2080380c7d7747c4594f2b46f4b05",
".git/objects/14/90aa240523d6d1a37416b2d7e1ed508591d639": "e412a196fb098a921896bcc9f1dc112d",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "46c4a17fc381a4129f8b0b7859a83abf",
".git/logs/refs/heads/main": "7c17e8dedddf3553300dd0fa861467bc",
".git/logs/refs/remotes/origin/main": "4e9ba9bbe9d93ef0a69c022fe1303cf4",
".git/logs/refs/stash": "870954493667e8b5a10249ed98e3e216",
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
".git/refs/heads/main": "664a58480627d8c123a2b3d2b9355b48",
".git/refs/remotes/origin/main": "664a58480627d8c123a2b3d2b9355b48",
".git/refs/stash": "ac220b207214693647196f9913e50baa",
".git/index": "0e108ed42b4562f81b5626078b70c7d1",
".git/COMMIT_EDITMSG": "aa8e05be974eae4bc1a9f67208519697",
".git/FETCH_HEAD": "8a93a8e408edaeb3cbd614884872cf69",
"assets/AssetManifest.json": "b1d23ebe2c66c6e71e4700ab73e01983",
"assets/NOTICES": "25d4bcec61df104f9c5f0b1995793b89",
"assets/FontManifest.json": "aaa7a11bbcb586bfc6669c6a94c00c38",
"assets/AssetManifest.bin.json": "ab89abc8acf43e752051ee91d6e95a45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6f8ef434a8e177da5c7bd6d20cdb3046",
"assets/fonts/MaterialIcons-Regular.otf": "13496290461f7434fa469dfb82780f62",
"assets/assets/splash/logo.png": "368e600a3cc05f9acda4c2e77b859047",
"assets/assets/splash/startup-icon.png": "e971c708be0f1c07d4731c88241cfff6",
"assets/assets/splash/1.png": "fc7f7f2774addc0d65c9b7f6b95461ca",
"assets/assets/images/maps/Carentan.png": "050a61341b110fb28a3870401f0fdb81",
"assets/assets/images/maps/map-backdrop.png": "9253be7c96272c7640733627603c277d",
"assets/assets/images/icon/arty.png": "736eec3c005e1ddab4a9ca171411694c",
"assets/assets/images/keyboard/Slider.png": "6dd2ba96f294b05be4f9e6ce7bf35fde",
"assets/assets/images/keyboard/IndependentDigit.png": "f3b6f826af8dcd5b6f0169c28b67f477",
"assets/assets/images/keyboard/Number.png": "3e71c568d9456e3cc9cf941845c79090",
"assets/assets/images/keyboard/IncreaseAndDecrease.png": "72aaa93c129acc051d8385ed76ed7acd",
"assets/assets/images/keyboard/A.png": "f3b6f826af8dcd5b6f0169c28b67f477",
"assets/assets/images/keyboard/Speech.png": "d2b563f38295fde0cb463fcbbd711f66",
"assets/assets/lang/zh_CN.json": "5bec78c1b27f0f0d97b042a7869d8df1",
"assets/assets/lang/zh_CH.json": "c37b75ca70c207f7211704f0553e9a58",
"assets/assets/lang/en_US.json": "31d69d0ed5deda29c120117abc337b67",
"assets/assets/audio/coins.wav": "4a4fff94c9ee5742329863ce86f31368",
"assets/assets/json/map-mattw.json": "9a4653ecef186bef3341c590d85e703f",
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
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
".idea/vcs.xml": "f990e6d29e03715a04983dd2f51d3595",
".idea/workspace.xml": "d9cbcecc6e4be4bdca02f8c3812fae60",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29,_13_57_%5BChanges%5D/shelved.patch": "3762305835b3a443f47d872a43977c5f",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29,_13_57_%5BChanges%5D/Icon-192.png": "9380f051034e27b322582ce7d819dfd6",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29,_13_57_%5BChanges%5D/canvaskit1.wasm": "1f237a213d7370cf95f443d896176460",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29,_13_57_%5BChanges%5D/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29,_13_57_%5BChanges%5D/favicon.png": "fc96e5f380f2005ca9fe859dc92ba8ad",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29,_13_57_%5BChanges%5D/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29,_13_57_%5BChanges%5D/MaterialIcons-Regular.otf": "13496290461f7434fa469dfb82780f62",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29,_13_57_%5BChanges%5D/AssetManifest.bin": "6f8ef434a8e177da5c7bd6d20cdb3046",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29,_13_57_%5BChanges%5D/Icon-512.png": "fc96e5f380f2005ca9fe859dc92ba8ad",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29__13_57__Changes_.xml": "7818178c568fad1743bb6e95c01fbf00",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29__13_59__Changes_.xml": "0cab281e0a8ae308dade61a6dcfc45f7",
".idea/shelf/Uncommitted_changes_before_Update_at_2024_8_29,_13_59_%5BChanges%5D/shelved.patch": "aa3f74f730b1a64d10d512e53d42a439",
".idea/web.iml": "2c8bb2b57bd6108d55833896a6d1d235",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"};
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

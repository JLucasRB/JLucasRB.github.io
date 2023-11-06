'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "691426b256c496c67cc31428cffc2539",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0d3443ead91b00e4d7b8c2ffa10ae0c5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dd003a62a4c93a1edbdd55679ba99408",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b213a89061ac491c369c9f1cde56946",
".git/logs/refs/heads/main": "802e419c452dccede6a6caa071fcd348",
".git/logs/refs/remotes/origin/main": "6c919c18fb03f5ea77bed2e20593c43f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/e84d813ecd0138c41a5b2eee5c3bf904a5342c": "ea8f639ec12925ab9e452c6d0846e897",
".git/objects/13/deab699b91459dc92618c9702e18e7c99ad2fb": "30e5e4f7260b087de9e519ea8876cb06",
".git/objects/17/9e8ddebbd16f41059dd20d9eaca5834b82d69a": "6abcc39910cc94e997835b6deb8cb0dc",
".git/objects/18/3acb81286e0e42cd27f4b84e6ef636759dc1f8": "2bdb14c9f933ca56c3276ac632ceeca9",
".git/objects/1a/68cda6aad3e49f1e9dbe932f36cb94f161db28": "94fb559313ea4c94755a315bb7447317",
".git/objects/1e/81511f24fbecd30a27f93abc986230aba9ef02": "8c2ed5d550cf35b3cdc2a3f01fe9b166",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/18d1d90e3053b3e80f7b4df45ba17c91601bd6": "659fb18be04ce1478c0e3b56792274a0",
".git/objects/29/100a5034e932eebdcdaebde52a6e70fb64ce6f": "8c12b9208b16c89faa0ff5707a9c5958",
".git/objects/2c/12e0d86d5bad1cc617f3db97fb37483c918a29": "f606d64b28d0c3f23a3b97241a5c17cd",
".git/objects/2e/59272c45c8c9c90bace0991dd19b9656003c45": "c2239b18cf3386a680e8abefce48fa3b",
".git/objects/2f/c8f3b4a9345d0680c0d7b7eafc08e6bcdf632f": "cab41ab3a6f9487dbd769831c6995796",
".git/objects/2f/d498306b72d5abc2487c54758607305207f510": "83cafde1aca99ca7f96582724084dce8",
".git/objects/30/d2c4a9d7d95c6e348fb3c6a25f92a8990294d7": "e9ba17b5b05c95882b664c4e15e142b4",
".git/objects/32/fc33a1820bdad53fecd6648936f282709e3169": "f7d852e1a9362faa9cfb5c88d4480c68",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/39/0799aad59df22fd1c3275398d95234001d280a": "4af3b265f4e97959c14b5870abcb1456",
".git/objects/3f/89079ef437b081b55b418de3ed11d7c4b4102c": "2ae0a97620bfe4329385217190a138f6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/894d2abe25ebba0964260843b171202d6ab022": "f9111c6d5e7473ee2384aead23823191",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/c72f89cfa9a98bd2469652555ab2c1f2478da0": "349542d2186f53c27e9bd80ef7d71166",
".git/objects/52/be11296f672f00e05113c17525c0a928f89246": "a8b158b20cf89161d21cb31d41bd3f13",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/892ccd076579e8128bdb992001cab329887778": "5ca96401590a0d9648de90330d88de52",
".git/objects/57/0a848ed6f9be574f4b27585bf552e6ccb3c262": "449d93996626d5f4a385ece5bfa0ea6c",
".git/objects/57/23e4dc144ee9bb54aa740a8895dc3ee8d0793d": "665d8caca4905cd6ca6e3a942b396ce7",
".git/objects/57/ab8b6ae8c5a38685479c2539a79c1f03d35258": "48e79a261f927e55a27e68b9d642d424",
".git/objects/58/45941a27bf2abc466894173296013bd812cecc": "9fe55e15d86e04ad821bde09de581e19",
".git/objects/58/b031bf7fd3970a7ac0b1e826500e65dc190af9": "7b4d2ed979db19ff536c1f0e330210c7",
".git/objects/63/2fe15f5a9b13555586a823fad875db95d8b59a": "0aefd17ec5c56829d96640e4a9a79968",
".git/objects/6a/bcf72d8f20e3ab717c26149648c8e54d335315": "674ceaa4deffc0dfa8a202516fde4ce3",
".git/objects/6e/f19c5baf5631c4952ee8cce74b82024cf4274a": "abecda11ee70653e95793778ab84ac57",
".git/objects/6f/525b5d3cc541b01c801ff025def5620dead8e5": "81000bf238db285a0d264adcd864a245",
".git/objects/74/4c5f0182e4693e83aef53475b2ba119dff7985": "0ac3d949226f339c44b090c274c9ad21",
".git/objects/76/aec58faacedd14d1d4dd152fd31db99df1daa8": "351405a053de47f33f6f2e1cf4ffe577",
".git/objects/77/5e408f73c07f9b184709b8109648f6e73c6578": "2d92c8ec63ab46d86f542cb571b44744",
".git/objects/79/9af9b56b6828c303d26b2af9168aa1a8e1815c": "d84704d41d41334941d709ebf20011df",
".git/objects/79/efa59fe2f26999e585ba36c2349996b5e70591": "d5e23242f7779407185007e466083c36",
".git/objects/7d/349193d020f30f1e8365e8d73798f009607d1a": "a57c7cce68c5e9236718c2c32f3d9df0",
".git/objects/7e/9fa247f0ea86608f7aff0b97d6e49d9a1d8174": "f7599689376a5ea2c4506039af4f7a57",
".git/objects/80/9bf5a67e758e44711b8d57c73d25aaaf12dd02": "90ad8c3ec65641d7aa26a2f6fad33260",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8a/d65f0b540218660ce3e7053e703364b0a01ea3": "e8e060db0f9a92514b857b676dd298e1",
".git/objects/93/5a009c47fd9820f3bf7a1f0a8bff75c41862f8": "8df3cc0b276d573facd2aaf931cc04cd",
".git/objects/95/f379337093fdd18421ddb0ca3fb4cff5f5c034": "dc36a6f101c81ed10786de948a0c0646",
".git/objects/9f/11b5cc005dcaa2e1e75813daea288aa4943573": "e1a70f4fdd3c84cab616c7121a7f0fb6",
".git/objects/9f/ead7a1fc6cfbf6beece589192ae6780045a568": "0ffe935b16e8727ef13bb46f10736b38",
".git/objects/a4/38046fa6bd6981796b9133a26f0168fa71ed27": "8b64d8be77631ee822b5691d38dd516c",
".git/objects/a5/08884cf28c12a26388353eda897134b687925a": "a94aa534c22380baf5fc81f647470aa6",
".git/objects/ab/105aa7e20b8c76616b5903f79f79b31e8e54a2": "88de1fed3697d46d8c03f1239eaf8fe5",
".git/objects/af/b3140b7dbc2376d81437111373b31547d0ef39": "a9ed353efae8dc361f1431ecd7bfc896",
".git/objects/b1/b4d0439ae304043da778af2f5d3e2458e555ce": "739faeca3dd8df8f98300cf6bab015b6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a91a259d6a89c5b1bc55c6e4157947e7be0184": "5b3f9df5aff64312ef54f47ad8b54990",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/35bb0fe09172e9ddf49e9a0a88dee805f1939d": "2c1fc8fe56a21dce9312c6dbd9b55100",
".git/objects/bb/8f8a0151bb5c082ff1bc7c1fc580ad2e12132e": "82a45382c2725d10a7c93b73304c9ace",
".git/objects/bc/4953bd6201907bb14f804f453a78ad8faef778": "351a90e6ae1462a6e7309f0e1eb40047",
".git/objects/bd/0f95932fa7cdf46b633ec2493a3f6424e65867": "4e96af441384ff339a004d88c9c12b38",
".git/objects/c2/e9da8e7507704cb5d5c27c68d53d9a2b113951": "a6fb69bc14f50f96344a4a0364838b55",
".git/objects/c6/c96627ed3771c70c64c4b2ae204686cc375bd7": "28ba35049208763b0c36cccafa485786",
".git/objects/c8/a66c1fbbcd773fc6a615b8231f754fbd9d5f4f": "c11c2a9a9e66c197129b6e7b186921e8",
".git/objects/c9/a3169d348ece3b94bc0c5c3408e05eca128336": "ea20fe66d9c9eaccabe3ed1e00c70ff9",
".git/objects/d6/1ee39473173ddf6d97753c139cd0ad49f35289": "7e2ece7690eeaa7e2651e40eadc55168",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/e6c23bd11f6491805f59b6c50f8dc4d64cfe72": "32abce5e36f1f2611d229f5b02412fb0",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/7605b00b5903a4e4f69fb64e4a72882862d6b0": "29b7df80341b192188b41bbfbb500deb",
".git/objects/e3/01fa04aebce63af813f11cb67041b42a11fa0e": "1c9040253a3a87d885815c469ab46899",
".git/objects/e3/9aeedb582269ddd13593af20c48a827761cd24": "594c647579138de14de6cdb3166a51c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/3d1e8e7baca439826fc3d72b4d877b159fe322": "cecd28c2c4bac9680f40f275e9ea983f",
".git/objects/e9/d72070682fb02dac3168aac607a847c561131c": "65350b84774a97af0481334d66576c9a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/dcd550c4e7ea7dbc23765230db1334a58a9c9e": "f26b35583294d6c3b9ae844c1a0de639",
".git/objects/ee/5990fd9736bc74147d7191b1ac87e1bb28fcf0": "8673cc1c81b3d3b05c40c12232b8a862",
".git/objects/ef/49362964289efdda14ab60ff350b3b75e56d30": "8920664d971ef3b78489f639017a555a",
".git/objects/f3/904475c7f0cb45bc48f0c564d9d2c95e14bad3": "bdc4b31a53bd3bd6e7a7e32382a510ca",
".git/objects/f4/25ede0f02d2d7717ef658f46a7fcd64de230aa": "2366f65a7673a15d779289e9a9ccb659",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fa/d4e0700215899a6e8b8743b07ff60811202988": "18c0008ac12cd7afb3384b7bfb1238f2",
".git/ORIG_HEAD": "94fe92d17245975af545d5dcecf85aa7",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "94fe92d17245975af545d5dcecf85aa7",
".git/refs/remotes/origin/main": "5059ce25ea98b7fb7bfe45326196fee6",
"assets/AssetManifest.bin": "9765fdf533205d5715ece7270fcf0623",
"assets/AssetManifest.bin.json": "de6737bb6b83ee9e56543e9afbd3b98e",
"assets/AssetManifest.json": "f0bc93fedf84b5baeefa8c31abc20370",
"assets/assets/LogoOfc.png": "6e36b07538752b01275abb4e4adf1fdb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "b660d5cd29f1049630adc71f50086f83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "d82b48acab042c4c0aaa48f1c4861c85",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "01752d6816e8977c8b0f331909d2ac19",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2e2664dbd549ef563af748439aaa8dcd",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "449fe75c4609d6b0c74cfe8650a75a4a",
"/": "57e59d5ebd1a92a07850cfa0fe3bfd1a",
"JLucasRB.github.io/.git/config": "458ec57eedd090f4b28d662e87f14e8e",
"JLucasRB.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"JLucasRB.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"JLucasRB.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"JLucasRB.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"JLucasRB.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"JLucasRB.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"JLucasRB.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"JLucasRB.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"JLucasRB.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"JLucasRB.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"JLucasRB.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"JLucasRB.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"JLucasRB.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"JLucasRB.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"JLucasRB.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"JLucasRB.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"JLucasRB.github.io/.git/index": "b17d8e8e80e4517da04fc88a7887a521",
"JLucasRB.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"JLucasRB.github.io/.git/logs/HEAD": "a53e65262aaf5ef35e09f5001daabb22",
"JLucasRB.github.io/.git/logs/refs/heads/main": "a53e65262aaf5ef35e09f5001daabb22",
"JLucasRB.github.io/.git/logs/refs/remotes/origin/HEAD": "a53e65262aaf5ef35e09f5001daabb22",
"JLucasRB.github.io/.git/objects/pack/pack-61c3f4c272ac304282f5571af1771e46d611283b.idx": "8ea132de28e6caf68d50f9e14f77c865",
"JLucasRB.github.io/.git/objects/pack/pack-61c3f4c272ac304282f5571af1771e46d611283b.pack": "3a86ef20a171d62cdcdd6966789cea42",
"JLucasRB.github.io/.git/objects/pack/pack-61c3f4c272ac304282f5571af1771e46d611283b.rev": "136111ca977ab86b02d3b9ff2b990cdb",
"JLucasRB.github.io/.git/packed-refs": "20eb5b6bcb9bd3c2ef527244c2cc81b7",
"JLucasRB.github.io/.git/refs/heads/main": "5059ce25ea98b7fb7bfe45326196fee6",
"JLucasRB.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"JLucasRB.github.io/assets/AssetManifest.bin": "9765fdf533205d5715ece7270fcf0623",
"JLucasRB.github.io/assets/AssetManifest.bin.json": "de6737bb6b83ee9e56543e9afbd3b98e",
"JLucasRB.github.io/assets/AssetManifest.json": "f0bc93fedf84b5baeefa8c31abc20370",
"JLucasRB.github.io/assets/assets/LogoOfc.png": "6e36b07538752b01275abb4e4adf1fdb",
"JLucasRB.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"JLucasRB.github.io/assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"JLucasRB.github.io/assets/NOTICES": "b660d5cd29f1049630adc71f50086f83",
"JLucasRB.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"JLucasRB.github.io/assets/shaders/ink_sparkle.frag": "e55854a8a18797b5f8c97f7afc109045",
"JLucasRB.github.io/canvaskit/canvaskit.js": "612ab9fd96eaf5221fdd4de3b9d72255",
"JLucasRB.github.io/canvaskit/canvaskit.wasm": "d82b48acab042c4c0aaa48f1c4861c85",
"JLucasRB.github.io/canvaskit/chromium/canvaskit.js": "75e0604e860ae82573d104d2c72ed529",
"JLucasRB.github.io/canvaskit/chromium/canvaskit.wasm": "01752d6816e8977c8b0f331909d2ac19",
"JLucasRB.github.io/canvaskit/skwasm.js": "8f70c47cdaaa2d48ea841fe1fd091ff5",
"JLucasRB.github.io/canvaskit/skwasm.wasm": "2e2664dbd549ef563af748439aaa8dcd",
"JLucasRB.github.io/canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"JLucasRB.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"JLucasRB.github.io/flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"JLucasRB.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"JLucasRB.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"JLucasRB.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"JLucasRB.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"JLucasRB.github.io/index.html": "57e59d5ebd1a92a07850cfa0fe3bfd1a",
"JLucasRB.github.io/main.dart.js": "f6e7dc97557e54ea4fbc028b764225e0",
"JLucasRB.github.io/manifest.json": "77c02c0ec1037ae76858f611f90408f1",
"JLucasRB.github.io/version.json": "7a34cd21241996fde900c78018c5d959",
"main.dart.js": "dbc3ebe96b3291b9a3e3d4ec11dff8be",
"manifest.json": "77c02c0ec1037ae76858f611f90408f1",
"README.md": "dee7a4dca704cee9a5171f5cf6cf0ed3",
"version.json": "7a34cd21241996fde900c78018c5d959"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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

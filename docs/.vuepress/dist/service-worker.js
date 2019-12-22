/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "554f80fb627cd82a5f963859d439c4cd"
  },
  {
    "url": "assets/css/0.styles.83341270.css",
    "revision": "c393d38fcb407e3f005cbfc30096f154"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b010319d.js",
    "revision": "e0f01b31e1d5507959dc8c4eefc5dd9d"
  },
  {
    "url": "assets/js/11.ec986f0e.js",
    "revision": "bc24cc8c4e9b1191d01375839c180a1c"
  },
  {
    "url": "assets/js/12.76738cfe.js",
    "revision": "235ea84eb986fc4317856541841c35a4"
  },
  {
    "url": "assets/js/13.bbe8db24.js",
    "revision": "20507b9a664f4dbb043b3f0f8d11733f"
  },
  {
    "url": "assets/js/14.95ed33f2.js",
    "revision": "74a389a39e4c9275bc911dab88073ea9"
  },
  {
    "url": "assets/js/15.9b530a07.js",
    "revision": "3fa90a4d20d42ec26c68983eef456fb3"
  },
  {
    "url": "assets/js/16.c06708be.js",
    "revision": "651fa906a34bcc20ac2a3575352c0553"
  },
  {
    "url": "assets/js/17.9344022b.js",
    "revision": "0116de3930e201a0d40e81f3f695fb30"
  },
  {
    "url": "assets/js/18.c19364cf.js",
    "revision": "5f198229881e1d4aa8b98b612d09d07b"
  },
  {
    "url": "assets/js/19.673aa635.js",
    "revision": "d89b1370287a5d80db3453bc0c29e3a3"
  },
  {
    "url": "assets/js/2.86f2ad00.js",
    "revision": "038b06a470e76be680db691c177efc84"
  },
  {
    "url": "assets/js/20.48bd14b6.js",
    "revision": "5c912cfb85059c9c0ce58cb35c9a06c7"
  },
  {
    "url": "assets/js/21.b7f6face.js",
    "revision": "7c48f63d80881a36fdda46d70eb99eb5"
  },
  {
    "url": "assets/js/22.d48761c9.js",
    "revision": "00fb63b5a477495b8d031a4cb817eb00"
  },
  {
    "url": "assets/js/23.2896d8a9.js",
    "revision": "da9b88d90fba81d87fa6586e6248fd0a"
  },
  {
    "url": "assets/js/24.e377bb9c.js",
    "revision": "10f2b73c6a59d95a87202b6e9f44356f"
  },
  {
    "url": "assets/js/25.a3b0986c.js",
    "revision": "bfe061bb423d19239507b3604e6bbe14"
  },
  {
    "url": "assets/js/26.3be65e30.js",
    "revision": "1c5e3259e95578154e560011ffec82f1"
  },
  {
    "url": "assets/js/27.7d21e22e.js",
    "revision": "7f98139db09d361d7734a0b4aa741e96"
  },
  {
    "url": "assets/js/28.e9173a1a.js",
    "revision": "ff754898fb051b40a005a57efaeae77c"
  },
  {
    "url": "assets/js/29.077d403d.js",
    "revision": "b527b90149d1747eb231c500ccd68b09"
  },
  {
    "url": "assets/js/3.b2a2c679.js",
    "revision": "1cdc3e4b6d46aa27535a1e4df5043423"
  },
  {
    "url": "assets/js/30.dba73487.js",
    "revision": "7b80e7941ba81ac5bc7a660a2f1cd47e"
  },
  {
    "url": "assets/js/4.b16ba34b.js",
    "revision": "59a765aaa183700a561cbd495210c9cd"
  },
  {
    "url": "assets/js/5.83e6f41e.js",
    "revision": "df1c85ee88c4f586fd0478a0e37c85e7"
  },
  {
    "url": "assets/js/6.c0935243.js",
    "revision": "2e8015ef5ea15011842735116c65a7c3"
  },
  {
    "url": "assets/js/7.d9a0d6de.js",
    "revision": "f2996ad96e971bc2bbf7b957ca6f3d88"
  },
  {
    "url": "assets/js/8.c16957de.js",
    "revision": "f5aa510721ddd5524df365fde03789be"
  },
  {
    "url": "assets/js/9.2fd5710f.js",
    "revision": "66b50c59d4eb3c58e99b8c9bd69059cf"
  },
  {
    "url": "assets/js/app.7849b7d0.js",
    "revision": "b141a102613a77864070c7ce90165387"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "egg.png",
    "revision": "4cd1b7550f33f26665b50fd241bc4ff8"
  },
  {
    "url": "index.html",
    "revision": "e140f65e717ac255cad454952fe33407"
  },
  {
    "url": "passages/2018-10-09-singleton-interview/index.html",
    "revision": "f956e3c1b51784bd93fbcc867902adb1"
  },
  {
    "url": "passages/2018-11-02-vuex-use/index.html",
    "revision": "8217d96ede4745dd1b9aebfcded0f1e9"
  },
  {
    "url": "passages/2018-5-10-javascript-speciality/index.html",
    "revision": "e01567409c77e35c0e942d23b4fa8974"
  },
  {
    "url": "passages/2019-03-11-module-tool/index.html",
    "revision": "5b4f702aecd702698eeb9e939896728d"
  },
  {
    "url": "passages/2019-1-11-learning-sentiment-summary/index.html",
    "revision": "b4382fa6b5135ce1fe3e3d4fb2451c56"
  },
  {
    "url": "passages/2019-11-09-looking-book/index.html",
    "revision": "1ef153979e5c7a501159eabfe70fe40d"
  },
  {
    "url": "passages/2019-11-11-looking-story/index.html",
    "revision": "ac6e98ccaa577cde18d822c623734f24"
  },
  {
    "url": "passages/2019-11-23-C-language-introduce/index.html",
    "revision": "ef5008b6638a18cbcbda2370664ee41f"
  },
  {
    "url": "passages/2019-11-24-C-basic-grammar/index.html",
    "revision": "f47da26e861a39098433e8b506787a39"
  },
  {
    "url": "passages/2019-11-27-network-introduce/index.html",
    "revision": "4d1c96ac61c4d276dad4bfbb313ce842"
  },
  {
    "url": "passages/2019-11-27-OSI-introduce/index.html",
    "revision": "45689d373f149d92f668111aaa69f769"
  },
  {
    "url": "passages/2019-11-27-tcpandudp-difference/index.html",
    "revision": "eaac8f420ef256ccaa75de6854fafbe4"
  },
  {
    "url": "passages/2019-11-27-Wechat-applet-introduce/index.html",
    "revision": "a68201fb8ee37abc574a20f21f47406d"
  },
  {
    "url": "passages/2019-5-09-Linux-command/index.html",
    "revision": "22deb1a57772cd61e6fa7e46b37ed3e5"
  },
  {
    "url": "passages/2019-7-09-whatever-notes/index.html",
    "revision": "5222aa293fd7b58b984e63e91a707210"
  },
  {
    "url": "passages/2019-7-11-fontend-mysql-use/index.html",
    "revision": "52c0a2b54dbe2120d9c6e52412f3372b"
  },
  {
    "url": "passages/OSI七层/01.物理层/01.物理设施.html",
    "revision": "cd4ecef5bd3173685db913d08cda1daf"
  },
  {
    "url": "passages/OSI七层/02.链路层/01.ARP协议.html",
    "revision": "4ef64757709dbd06bdb7a384e155b5da"
  },
  {
    "url": "passages/OSI七层/07.应用层/01.无状态的HTTP.html",
    "revision": "637cf833afb75313b5a861d6fce9d5bf"
  },
  {
    "url": "passages/学习笔记/02.知识扩展/01.经典语录.html",
    "revision": "5ceb7625de4f0cc64b46a81ad2c6d9e7"
  },
  {
    "url": "passages/学习笔记/02.知识扩展/02.计算机小知识.html",
    "revision": "63d111331853679412df9482f1ee59a6"
  },
  {
    "url": "passages/学习笔记/02.知识扩展/03.非技术知识扩展.html",
    "revision": "e54980446476ff837785a889e233b726"
  },
  {
    "url": "passages/学习笔记/02.知识扩展/04.知识扩展.html",
    "revision": "e21eb15159d4855bdbe28c8f94f34f1e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

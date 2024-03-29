/// <reference lib="webworker" />

import { build, files, version } from '$service-worker';

const worker = self as unknown as ServiceWorkerGlobalScope;
const VERSION = `cache${version}`;

// `build` is an array of all the files generated by the bundler,
// `files` is an array of everything in the `static` directory
const cacheFiles = build.concat(files);
const staticAssets = new Set(cacheFiles);

worker.addEventListener('install', () => {
  console.log('Start install');
  worker.skipWaiting();
});

worker.addEventListener('activate', (ev) => {
  console.log('Activated, remove old cached...');
  ev.waitUntil(
    caches.keys().then(async (keys) => {
      // delete old caches
      await Promise.all(
        keys.map((key) => {
          if (key !== VERSION) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

worker.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

  const url = new URL(event.request.url);
  // console.log('On fetch', event.request.url, url.pathname);

  if (staticAssets.has(url.pathname)) {
    event.respondWith(
      caches
        .match(event.request, {
          ignoreSearch: true
        })
        .then(function (cached) {
          // Cache hit - return response
          if (cached) {
            return cached;
          }
          // console.log('No cached, create', event.request.url);
          return fetch(event.request);
        })
        .then(async (response) => {
          const cache = await caches.open(VERSION);
          cache.put(event.request.url, response.clone());
          return response;
        })
    );
  }
});

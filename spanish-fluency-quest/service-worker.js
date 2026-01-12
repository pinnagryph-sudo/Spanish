const CACHE_NAME = 'spanish-quest-v3';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    // Lesson data files
    '/data/lessons-month1.js',
    '/data/lessons-month2.js',
    '/data/lessons-month3.js',
    '/data/lessons.js',
    // Vocabulary data files
    '/data/vocabulary-part1.js',
    '/data/vocabulary-part2.js',
    '/data/vocabulary-part3.js',
    '/data/vocabulary-all.js',
    // Exercise data file
    '/data/exercises.js',
    // Icons
    '/assets/icon.svg',
    '/assets/icon-192.png',
    '/assets/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))
        )).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(() => caches.match('/index.html'))
    );
});

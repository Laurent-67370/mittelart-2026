const CACHE_NAME = 'mittelart-2026-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/logo_ALSACE_Collectivite_europeenne.png',
  '/logo_Credit_Mutuel.jpeg',
  '/logo_Le_Geant_des_Beaux_Arts.png',
  '/logo_Groupe_Steinmetz.jpeg',
  '/logo_CG_Photogravure.png',
  '/logo_Mittelhausbergen.jpeg',
  '/article-sculptures.jpg',
  '/article-expo-dna.jpg'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Erreur lors de la mise en cache:', error);
      })
  );
  self.skipWaiting();
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Stratégie de cache: Network First avec fallback sur Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Vérifier si la réponse est valide
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Cloner la réponse
        const responseToCache = response.clone();

        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseToCache);
          });

        return response;
      })
      .catch(() => {
        // Si le réseau échoue, essayer de récupérer depuis le cache
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            // Si pas dans le cache, retourner une page offline personnalisée
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Gestion des messages du client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

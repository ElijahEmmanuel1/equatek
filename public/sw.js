/* ─── Equatek Service Worker ─────────────────────────────── */
const CACHE = 'equatek-v1'

/* Files to pre-cache on install */
const PRECACHE = ['/', '/manifest.json', '/icon.svg', '/icon-maskable.svg']

/* ── Install: pre-cache shell ─────────────────────────────── */
self.addEventListener('install', (e) => {
  self.skipWaiting()
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE))
  )
})

/* ── Activate: purge old caches ───────────────────────────── */
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  )
})

/* ── Fetch: cache-first for assets, network-first for nav ─── */
self.addEventListener('fetch', (e) => {
  const { request } = e
  if (request.method !== 'GET') return

  const url = new URL(request.url)

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return

  // Navigation requests: network-first, fall back to cached root
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request)
        .then((res) => {
          putInCache(request, res.clone())
          return res
        })
        .catch(() => caches.match('/') ?? new Response('Hors ligne', { status: 503 }))
    )
    return
  }

  // Static assets (JS, CSS, fonts, images): cache-first
  e.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached
      return fetch(request).then((res) => {
        if (res.ok) putInCache(request, res.clone())
        return res
      })
    })
  )
})

function putInCache(request, response) {
  caches.open(CACHE).then((cache) => cache.put(request, response))
}

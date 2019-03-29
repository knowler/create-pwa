export function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')

    self.addEventListener('install', function() {
      console.info('TODO: create cache.')
    })

    self.addEventListener('fetch', function() {
      console.info('TODO: handle fetch requests.')
    })
  }
}

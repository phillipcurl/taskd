// Require Nuxt And Builder modules
const {
  Nuxt,
  Builder
} = require('nuxt')

// Require nuxt config
const config = require('./nuxt.config.js')
// config.dev = !(process.env.NODE_ENV === 'production')

// Create a new nuxt instance
const nuxt = new Nuxt(config)

// Enable live build & reloading on dev
if (nuxt.options.dev) {
  new Builder(nuxt).build()
}

module.exports = nuxt
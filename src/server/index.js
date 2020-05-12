/**
 * @file netoviz server definition
 */

require('dotenv').config()
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const config = require('../nuxt.config.js')

// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production'

// Init Nuxt.js
const nuxt = new Nuxt(config)
const host = nuxt.options.server.host
const httpPort = nuxt.options.server.port

/** HTTP server */
async function startHTTPServer() {
  const app = express()

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(httpPort, host)
  consola.ready({
    message: `HTTP Server listening on http://${host}:${httpPort}/`,
    badge: true
  })
}

// Run server.
startHTTPServer()

import { FastifyInstance } from 'fastify'
import fastifyCors from '@fastify/cors'

export const registerPlugins = (app: FastifyInstance): void => {
  void app.register((fastify, _options, done) => {
    void fastify.register(fastifyCors, {
      origin: '*'
    })
    done()
  })
}

import fastify, { FastifyInstance } from 'fastify'
import { registerPlugins } from './plugin-register'
import { setupRoutes } from './routes'

const server: FastifyInstance = fastify()
registerPlugins(server)
setupRoutes(server)

export default server

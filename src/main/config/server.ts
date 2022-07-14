import fastify, { FastifyInstance } from 'fastify'
import { registerPlugins } from './plugin-register'

const server: FastifyInstance = fastify()
registerPlugins(server)

export default server

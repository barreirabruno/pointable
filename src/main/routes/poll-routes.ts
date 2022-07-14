import { FastifyInstance, FastifyServerOptions } from 'fastify'
import { makeCreatePollController } from '../factories/poll-controller'

module.exports = function (app: FastifyInstance, opts: FastifyServerOptions, done: any) {
  const createPollController = makeCreatePollController()
  app.get('/poll', async function (request, reply) {
    const httpResponse = await createPollController.handle(request)
    void reply.status(httpResponse.statusCode).send(httpResponse)
  })
  done()
}

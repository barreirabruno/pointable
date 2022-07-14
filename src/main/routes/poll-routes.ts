import { FastifyInstance, FastifyServerOptions } from 'fastify'
import { makeCreatePollController } from '../factories/poll-controller'

interface ICreatePoll {
  title: string
  type: number
  published: number
  createdAt: string
  updatedAt: string
  startsAt: string
  endsAt: string
  content: string
}

module.exports = function (app: FastifyInstance, opts: FastifyServerOptions, done: any) {
  const createPollController = makeCreatePollController()
  app.post<{
    Body: ICreatePoll
  }>('/poll', async function (request, reply) {
    const httpResponse = await createPollController.handle(request.body)
    void reply.status(httpResponse.statusCode).send(httpResponse)
  })
  done()
}

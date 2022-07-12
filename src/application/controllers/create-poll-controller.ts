import { CreatePollService } from '@/data/services'
import { HttpResponse, success } from '../helpers/http-helpers'
import Controller from './controller'

type CreatePollHttpRequest = {
  title: string
  type: number
  published: number
  createdAt: string
  updatedAt: string
  startsAt: string
  endsAt: string
  content: string
}

export default class CreatePollController extends Controller {
  constructor (
    private readonly createPollService: CreatePollService
  ) {
    super()
  }

  async perform (httpRequest: CreatePollHttpRequest): Promise<HttpResponse<any>> {
    const createPoll = await this.createPollService.execute({
      title: httpRequest.title,
      type: httpRequest.type,
      published: httpRequest.published,
      createdAt: new Date(httpRequest.createdAt),
      updatedAt: new Date(httpRequest.updatedAt),
      startsAt: new Date(httpRequest.startsAt),
      endsAt: new Date(httpRequest.endsAt),
      content: httpRequest.content
    })
    return success(createPoll)
  }
}

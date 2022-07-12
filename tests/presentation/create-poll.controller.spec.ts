import Controller from '@/application/controllers/controller'
import { HttpResponse, success } from '@/application/helpers/http-helpers'
import { CreatePollService } from '@/data/services'
import { PollDatabaseRepo } from '@/infra/database/repos/poll-db-repo'

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

class CreatePollController extends Controller {
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

describe('Create Poll controller', () => {
  let pollDatabaseRepo: PollDatabaseRepo
  let createPollService: CreatePollService
  let sut: CreatePollController

  const fakeParams = {
    title: 'any_poll_title',
    type: 1,
    published: 0,
    createdAt: '2022-07-15',
    updatedAt: '2022-07-15',
    startsAt: '2022-07-20',
    endsAt: '2022-07-25',
    content: 'any_poll_content'
  }

  beforeEach(() => {
    pollDatabaseRepo = new PollDatabaseRepo()
    createPollService = new CreatePollService(pollDatabaseRepo)
    sut = new CreatePollController(createPollService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call Create Poll controller with correct params', async () => {
    const spyCreatePoll = jest.spyOn(createPollService, 'execute')
    await sut.perform(fakeParams)
    expect(spyCreatePoll).toHaveBeenCalled()
    expect(spyCreatePoll).toHaveBeenCalledTimes(1)
    expect(spyCreatePoll).toHaveBeenCalledWith({
      title: fakeParams.title,
      type: fakeParams.type,
      published: fakeParams.published,
      createdAt: new Date(fakeParams.createdAt),
      updatedAt: new Date(fakeParams.updatedAt),
      startsAt: new Date(fakeParams.startsAt),
      endsAt: new Date(fakeParams.endsAt),
      content: fakeParams.content
    })
  })
})

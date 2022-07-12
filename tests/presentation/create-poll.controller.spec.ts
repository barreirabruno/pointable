import CreatePollController from '@/application/controllers/create-poll-controller'
import { CreatePollService } from '@/data/services'
import { PollDatabaseRepo } from '@/infra/database/repos/poll-db-repo'

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

  it('should return 200 if perform method succeeds', async () => {
    const request = await sut.perform(fakeParams)
    expect(request).toEqual({
      statusCode: 200,
      data: {
        title: fakeParams.title,
        type: fakeParams.type,
        published: fakeParams.published,
        createdAt: new Date(fakeParams.createdAt),
        updatedAt: new Date(fakeParams.updatedAt),
        startsAt: new Date(fakeParams.startsAt),
        endsAt: new Date(fakeParams.endsAt),
        content: fakeParams.content
      }
    })
  })
})

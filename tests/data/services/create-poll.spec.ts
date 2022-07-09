import { Poll } from '@/domain/entities'
import { CreatePollInterface, CreatePollNamespace } from '@/domain/features/createPoll.interface'

class PollDatabaseRepo {
  private readonly pollList: Poll[] = []

  add (newPoll: Poll): void {
    this.pollList.push(newPoll)
  }
}

class CreatePollService implements CreatePollInterface {
  constructor (
    private readonly pollDatabaseRepo: PollDatabaseRepo
  ) {}

  async execute (params: CreatePollNamespace.Input): Promise<CreatePollNamespace.Output> {
    const newPoll = new Poll(params)
    await this.pollDatabaseRepo.add(newPoll)
    return newPoll
  }
}

const fixedDate = new Date(Date.now())
const paramsInput = {
  title: 'any_poll_title',
  type: 1,
  published: 0,
  createdAt: fixedDate,
  updatedAt: fixedDate,
  startsAt: fixedDate,
  endsAt: fixedDate,
  content: 'any_description_content_value'
}

describe('Create Poll Service', () => {
  let pollDatabaseRepo: PollDatabaseRepo
  let sut: CreatePollService

  beforeEach(() => {
    pollDatabaseRepo = new PollDatabaseRepo()
    sut = new CreatePollService(pollDatabaseRepo)
  })

  it('should create a new poll successfully', async () => {
    const spyRepo = jest.spyOn(pollDatabaseRepo, 'add')
    const response = await sut.execute(paramsInput)
    expect(spyRepo).toHaveBeenCalled()
    expect(spyRepo).toHaveBeenCalledTimes(1)
    expect(response).toEqual({
      title: 'any_poll_title',
      type: 1,
      published: 0,
      createdAt: fixedDate,
      updatedAt: fixedDate,
      startsAt: fixedDate,
      endsAt: fixedDate,
      content: 'any_description_content_value'
    })
    expect(spyRepo).toHaveBeenCalled()
    expect(spyRepo).toHaveBeenCalledWith(paramsInput)
    expect(spyRepo).toHaveBeenCalledTimes(1)
  })
})

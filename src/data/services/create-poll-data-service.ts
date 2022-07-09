import { Poll } from '@/domain/entities'
import { CreatePollInterface, CreatePollNamespace } from '@/domain/features/createPoll.interface'
import { PollDatabaseRepo } from '@/infra/database/repos/poll-db-repo'

export class CreatePollService implements CreatePollInterface {
  constructor (
    private readonly pollDatabaseRepo: PollDatabaseRepo
  ) {}

  async execute (params: CreatePollNamespace.Input): Promise<CreatePollNamespace.Output> {
    const newPoll = new Poll(params)
    await this.pollDatabaseRepo.add(newPoll)
    return newPoll
  }
}

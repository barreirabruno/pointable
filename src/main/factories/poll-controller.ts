import CreatePollController from '@/application/controllers/create-poll-controller'
import { CreatePollService } from '@/data/services'
import { PollDatabaseRepo } from '@/infra/database/repos/poll-db-repo'

export const makeCreatePollController = (): CreatePollController => {
  const persistence: PollDatabaseRepo = new PollDatabaseRepo()
  const createPollService: CreatePollService = new CreatePollService(persistence)
  return new CreatePollController(createPollService)
}

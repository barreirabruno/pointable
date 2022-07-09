import { Poll } from '@/domain/entities'

export class PollDatabaseRepo {
  private readonly pollList: Poll[] = []

  add (newPoll: Poll): void {
    this.pollList.push(newPoll)
  }
}

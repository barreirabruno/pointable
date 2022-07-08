type PollInput = {
  title: string
  type: number
  published: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  startsAt: Date
  endsAt: Date
  content: string
}

export class Poll {
  title: string
  type: number
  published: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  startsAt: Date
  endsAt: Date
  content: string

  constructor (params: PollInput) {
    this.title = params.title
    this.type = params.type
    this.published = params.published
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
    this.publishedAt = params.publishedAt
    this.startsAt = params.startsAt
    this.endsAt = params.endsAt
    this.content = params.content
  }
}

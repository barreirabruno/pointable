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

class Poll {
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

describe('Poll Entity', () => {
  let sut: Poll

  it('should create a Poll entity with correct params', () => {
    const fixedDate = new Date(Date.now())
    const params = {
      title: 'any_poll_title',
      type: 1,
      published: 0,
      createdAt: fixedDate,
      updatedAt: fixedDate,
      startsAt: fixedDate,
      endsAt: fixedDate,
      content: 'any_description_content_value'
    }
    sut = new Poll(params)
    expect(sut).toEqual({
      title: 'any_poll_title',
      type: 1,
      published: 0,
      createdAt: fixedDate,
      updatedAt: fixedDate,
      publishedAt: undefined,
      startsAt: fixedDate,
      endsAt: fixedDate,
      content: 'any_description_content_value'
    })
  })

  it('should define publishedAt attribute on Poll instance', () => {
    const fixedDate = new Date(Date.now())
    const params = {
      title: 'any_poll_title',
      type: 1,
      published: 0,
      createdAt: fixedDate,
      updatedAt: fixedDate,
      publishedAt: fixedDate,
      startsAt: fixedDate,
      endsAt: fixedDate,
      content: 'any_description_content_value'
    }
    sut = new Poll(params)
    expect(sut).toEqual({
      title: 'any_poll_title',
      type: 1,
      published: 0,
      createdAt: fixedDate,
      updatedAt: fixedDate,
      publishedAt: fixedDate,
      startsAt: fixedDate,
      endsAt: fixedDate,
      content: 'any_description_content_value'
    })
  })
})

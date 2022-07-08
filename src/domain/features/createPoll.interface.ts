export interface CreatePollInterface {
  execute: (params: CreatePollNamespace.Input) => Promise<CreatePollNamespace.Output>
}

export namespace CreatePollNamespace {
  export type Input = {
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
  export type Output = {
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
}

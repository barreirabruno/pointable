type CandidateInput = {
  pollId: number
  name: string
}

export class Candidate {
  pollId: number
  name: string

  constructor (params: CandidateInput) {
    this.pollId = params.pollId
    this.name = params.name
  }
}

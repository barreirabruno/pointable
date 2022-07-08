type VoteCandidateInput = {
  pollId: number
  candidateId: number
}

export class VoteCandidade {
  pollId: number
  candidateId: number

  constructor (params: VoteCandidateInput) {
    this.pollId = params.pollId
    this.candidateId = params.candidateId
  }
}

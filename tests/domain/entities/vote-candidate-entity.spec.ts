type VoteCandidateInput = {
  pollId: number
  candidateId: number
}

class VoteCandidade {
  pollId: number
  candidateId: number

  constructor (params: VoteCandidateInput) {
    this.pollId = params.pollId
    this.candidateId = params.candidateId
  }
}

describe('Vote Candidate entity', () => {
  let sut: VoteCandidade

  it('should creta a Vote in a candidate', () => {
    const paramsInput = {
      pollId: 2,
      candidateId: 2
    }
    sut = new VoteCandidade(paramsInput)
    expect(sut).toEqual({
      pollId: 2,
      candidateId: 2
    })
  })
})

type CandidateInput = {
  pollId: number
  name: string
}

class Candidate {
  pollId: number
  name: string

  constructor (params: CandidateInput) {
    this.pollId = params.pollId
    this.name = params.name
  }
}

describe('Candidate Entity ', () => {
  let sut: Candidate

  it('should create a Candidate with correct params', () => {
    const params = {
      pollId: 1,
      name: 'any_candidate_name'
    }
    sut = new Candidate(params)
    expect(sut).toEqual({
      pollId: 1,
      name: 'any_candidate_name'
    })
  })
})

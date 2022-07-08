import { Candidate } from '@/domain/entities'

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

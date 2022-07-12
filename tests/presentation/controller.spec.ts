import Controller from '@/application/controllers/controller'
import { HttpResponse } from '@/application/helpers/http-helpers'
import ServerError from '@/domain/errors/server-error.domain'

class ControllerStub extends Controller {
  result: HttpResponse = {
    statusCode: 200,
    data: 'any_data'
  }

  async perform (httpRequest: any): Promise<HttpResponse<any>> {
    return this.result
  }
}

describe('Controller', () => {
  let sut: ControllerStub

  beforeEach(() => {
    sut = new ControllerStub()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return 500 if perform  method fail for any reason', async () => {
    const error = new ServerError(new Error('[ANY_ERROR]'))
    jest.spyOn(sut, 'perform').mockResolvedValueOnce({
      statusCode: 500,
      data: error
    })

    const httpResponse = await sut.handle({ key: 'any_value' })

    expect(httpResponse).toEqual({
      statusCode: 500,
      data: error
    })
  })

  it('should return same result as perform', async () => {
    const request = await sut.handle({ key: 'any_value' })
    expect(request).toEqual({
      statusCode: 200,
      data: 'any_data'
    })
  })
})

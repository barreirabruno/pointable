import Controller from '@/application/controllers/controller'
import { HttpResponse } from '@/application/helpers/http-helpers'

class ControllerStub extends Controller {
  result: HttpResponse = {
    statusCode: 200,
    body: 'any_data'
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

  it('should return same result as perform', async () => {
    const request = await sut.handle({ key: 'any_value' })
    expect(request).toEqual({
      statusCode: 200,
      body: 'any_data'
    })
  })
})

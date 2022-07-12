import ServerError from '@/domain/errors/server-error.domain'

type HttpResponse<T = any> = {
  statusCode: number
  body: T
}

const serverError = (error: Error): HttpResponse<Error> => ({
  statusCode: 500,
  body: new ServerError(error)
})

abstract class Controller {
  abstract perform (httpRequest: any): Promise<HttpResponse>

  async handle (httpRequest: any): Promise<HttpResponse> {
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}

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

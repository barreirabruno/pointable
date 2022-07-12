import ServerError from '@/domain/errors/server-error.domain'

export type HttpResponse<T = any> = {
  statusCode: number
  body: T
}

export const serverError = (error: Error): HttpResponse<Error> => ({
  statusCode: 500,
  body: new ServerError(error)
})

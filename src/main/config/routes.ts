import { FastifyInstance } from 'fastify'
import { readdirSync } from 'fs'
import { join } from 'path'

export const setupRoutes = (app: FastifyInstance): void => {
  readdirSync(join(__dirname, '../routes'))
    .filter(file => !file.endsWith('.map') && !file.endsWith('.d.ts'))
    .map(async file => {
      /* eslint-disable */
      (await app.register(require(`../routes/${file}`)
      ))
    })
}
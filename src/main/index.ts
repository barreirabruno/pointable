import './config/module-alias'

import server from '@/main/config/server'

void (async () => {
  try {
    await server.listen({ port: 3333 }, (err, address) => {
      if (err != null) {
        console.log('[ERROR][START][SERVER]: ', err)
        process.exit(1)
      }
      console.log(`[APPLICATION UP AND RUNNING ON ${address}]`)
    })
  } catch (error) {
    console.log('[STARTUP ERROR]: ', error)
  }
})()

import * as cors from 'cors'
import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'

import schema from './modules'
import { catchErrors } from './lib/utils'
import { fetchGoogleProfile } from './lib/authentication'
;(() => {
  const app = express()

  app.use(cors())
  app.get('/oauth', catchErrors(fetchGoogleProfile))
  app.use(
    '/graphql',
    graphqlHTTP((req, res) => ({
      schema,
      graphiql: true,
      context: { req, res }
    }))
  )
  app.listen(4000, () => console.info('Running at 4000 mon 🔥'))
})()

import * as cors from 'cors'
import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import * as cookieParser from 'cookie-parser'

import schema from './modules'
import { catchErrors } from './lib/utils'
import env from './lib/config'
import { fetchGoogleProfile } from './lib/authentication'

const app = express()

app.use(cookieParser())
app.use(cors({ credentials: true, origin: env.CLIENT_URL }))
app.get('/oauth', catchErrors(fetchGoogleProfile))
app.use('/graphql', (req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin', env.CLIENT_URL)
    res.sendStatus(200)
  } else {
    next()
  }
})
app.use(
  '/graphql',
  graphqlHTTP((req, res) => ({
    schema,
    graphiql: true,
    context: { req, res }
  }))
)
app.listen(4000, () => console.info('Running at 4000 mon 🔥'))

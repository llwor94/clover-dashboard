import * as cors from 'cors'
import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'

import schema from './modules'
import { googleConnectionUrl, oauth2Client } from './lib/authentication'

const app = express()

app.get('/redirect', async (req, res) => {
  const { tokens } = await oauth2Client.getToken(req.query.code)

  oauth2Client.setCredentials(tokens)
  res.send(tokens)
})
app.get('/test', (_, res) => {
  res.redirect(googleConnectionUrl)
})
app.use(cors())
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))
app.listen(4000, () => console.info('Running at 4000 mon 🔥'))

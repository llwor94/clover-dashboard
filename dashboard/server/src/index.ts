import * as cors from 'cors'
import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'

import schema from './modules'

const app = express()

app.use(cors())
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))
app.listen(4000, () => console.info('Running at 4000 mon 🔥'))

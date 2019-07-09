import * as cors from 'cors'
import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import * as cookieParser from 'cookie-parser'

import schema from './modules'
import { catchErrors } from './lib/utils'
import { fetchGoogleProfile } from './lib/authentication'

const app = express()

app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
// app.use(async (req, res, next) => {
//   const { token } = req.cookies;
//   console.log('token', token)
//   if (token) {
//     const { userId } = jwt.verify(token, process.env.APP_SECRET);
//     // put the userId onto the req for future requests to access
//     req.userId = userId;
//   }
//   next();
// })
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

import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import teamRoutes from './routes/team.routes.js'

const app = express()

app.use(morgan('dev')) // muestra las peticiones en consola
app.use(express.json())
app.use(cookieParser()) // permite leer las cookies

app.use('/api', authRoutes)
app.use('/api/teams', teamRoutes)

export default app

// npm run dev
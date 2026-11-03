import express from 'express'
import 'dotenv/config'
import { dbConnect } from './database/db.js'

const port = process.env.PORT || 8000

const app = express()

dbConnect()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
import "dotenv/config"
import Express from "express"
import cors from "cors"

import streamRoute from "./routes/stream.js"
import reStream from "./routes/restream.js"

const app = Express()

app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/stream', streamRoute)
app.use('/restream', reStream)

app.use((req, res) => {
    res.status(404).end()
})

app.listen(process.env.SERVICE_PORT, '127.0.0.1', (err) => {
    if (err) return console.log('🔥 Service not started')
    console.log(`⚡️ Service started on ${process.env.SERVICE_PORT} port`)
})

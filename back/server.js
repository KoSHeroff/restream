import server from "./app.js"

const port = process.env.SERVICE_PORT || 4000

server.listen(port, '127.0.0.1', (err) => {
    if (err) return console.log('🔥 Service not started')
    console.log(`⚡️ Service started on ${port} port`)
})
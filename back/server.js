import server from "./app.js"

server.listen(process.env.SERVICE_PORT, '127.0.0.1', (err) => {
    if (err) return console.log('🔥 Service not started')
    console.log(`⚡️ Service started on ${process.env.SERVICE_PORT} port`)
})
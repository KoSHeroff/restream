import request from "supertest"
import app from "./app.js"
import base from "./utils/base.js"

describe('DataBase', () => {
    test("Connect to database", async () => {
        await base.raw("SELECT 1")
    })
})

describe("Paths", () => {
    test("path: /", async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    })

    test("path: /stream", async () => {
        const response = await request(app).get('/stream')
        JSON.parse(response.text)
        expect(response.statusCode).toBe(200)
    })

    test("path: /restream", async () => {
        const response = await request(app).get('/restream')
        JSON.parse(response.text)
        expect(response.statusCode).toBe(200);
    })

    afterAll((done) => {
        base.context.destroy(done)
    })
})


import knex from "knex"

const base = knex({
    client: "mysql2",
    connection: {
        host: process.env.BASE_HOST,
        port: process.env.BASE_PORT,
        user: process.env.BASE_USER,
        password: process.env.BASE_PASS,
        database: process.env.BASE_BASE
    }
})

export default base
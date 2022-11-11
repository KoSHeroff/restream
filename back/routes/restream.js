import { Router } from "express";

import base from "../utils/base.js";

const route = Router()

route.get('/', async (req, res) => {
    const reStreams = await base.from('relaying').select();

    return res.send(reStreams)
})

route.get('/:id', async (req, res) => {
    const {
        id
    } = req.params;

    const reStreams = await base.from('relaying').select().where('app_id', id)

    return res.send(reStreams)
})

export default route
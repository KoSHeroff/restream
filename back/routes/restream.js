import { Router } from "express";

import base from "../utils/base.js";

const route = Router()

route.get('/', async (req, res) => {
    try {
        const reStreams = await base.from('relaying').select();

        return res.send(reStreams)
    } catch(e) {
        res.status(500).end()
    }
    
})

route.get('/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params;
    
        const reStreams = await base.from('relaying').select().where('app_id', id)
    
        return res.send(reStreams)
    } catch(e) {
        res.status(500).end()
    }
    
})

export default route
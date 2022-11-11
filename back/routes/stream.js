import { Router } from "express";

import base from "../utils/base.js";

const route = Router()

route.get('/', async (req, res) => {
    const streamsHosts = await base.from('auth').select();
    
    const reviewStreams = streamsHosts.map(elem => ({
        ...elem,
        active: elem.active == 1
    }))

    res.send(reviewStreams)
})

export default route
import express from "express"

let router = express.Router()

let webRouters = (app) => {
    router.get('/', (req, res)=>{
        return res.send('Hello world duyvo')
    })
    
    return app.use("/", router)
}

module.exports = webRouters
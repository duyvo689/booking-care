import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";


let router = express.Router()

let webRouters = (app) => {
    router.get('/',homeController.getHomePage)
    
    router.get('/docter', (req, res)=>{
        return res.send('Hello world')
    })
    
    router.post('/api/login', userController.handleLogin)


    return app.use("/", router)
}

module.exports = webRouters
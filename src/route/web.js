import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router()

let webRouters = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/doctor', (req, res) => {
        return res.send('Hello world')
    });

    router.post('/api/login', userController.handleLogin);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    return app.use("/", router)


}

module.exports = webRouters
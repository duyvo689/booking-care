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
    router.get('/get-crud', homeController.getdisplayCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    return app.use("/", router)


}

module.exports = webRouters
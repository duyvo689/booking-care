
import db from "../models/index"
import CRUDServices from "../services/CRUDServices"
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('homeweb.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }

};

let getCRUD = (req, res) => {
    return res.render('crud.ejs'); //render file giao diện nhập dữ liệu
}
let postCRUD = async (req, res) => {

    await CRUDServices.createNewUser(req.body);
    console.log(req.body);
    return res.send('Đã thêm user');
}
let getdisplayCRUD = async (req, res) => {
    await CRUDServices.getallUser();

    return res.render('getCRUD.ejs', {
        dataTable: data
    })

}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getdisplayCRUD: getdisplayCRUD,
}
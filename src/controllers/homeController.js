
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

    let data = await CRUDServices.getallUser();

    return res.render('getCRUD.ejs', { dataTable: data }) // gán biến dataTable cho data + render file giao diện getCRUD

};
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDServices.getUserInforById(userId); //nếu tồn tại userId thì trả về thông tin của user đó

        return res.render('editCRUD.ejs', {
            user: userData,// gán giá trị biến userData cho biến user
        });

    }
    else {
        return res.send('Không tìm thấy user này')
    }


}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDServices.updateUserData(data);
    return res.render('getCRUD.ejs', {
        dataTable: allUsers //gán biến allUsers bằng biến dataTable trong file getCRUD.ejs
    });
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getdisplayCRUD: getdisplayCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
}
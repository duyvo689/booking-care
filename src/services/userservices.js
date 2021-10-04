import db from "../models/index"; //import database
import User from "../models/user";
import bcrypt from 'bcryptjs';
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let tontai = await checkuseremail(email);
            if (tontai === true) //kiem tra co nguoi dung
            {
                let user = await db.User.findOne({
                    attributes: ['email', 'password'], //gồm 2 trường email và password
                    where: { email: email }, //so sánh email
                    raw: true, //crash server, đang tìm cách fix-dùng để delete password
                    delete: 'password', //không trả về password phòng ngừa bị hack
                });

                if (user) { //neu ton tai nguoi dung
                    let check = await bcrypt.compareSync(password, user.password); //so sánh password

                    if (check) {
                        userData.maloi = 0;
                        userData.thongbao = 'Thanh cong';
                        delete user.password; //không trả về thông tin password
                        userData.user = user; //trả về thông tin còn lại
                    }
                    else {
                        userData.maloi = 3;
                        userData.thongbao = 'Sai mật khẩu';
                    }
                } else {
                    userData.maloi = 2;
                    userData.thongbao = 'Không tìm thấy người dùng';
                }


            } else {
                //neu khong ton tai nguoi dung
                userData.maloi = 1;
                userData.thongbao = 'Email không tồn tại';

            }
            resolve(userData);
        }

        catch (e) {
            reject(e);
        }
    })


}

//kiểm tra email của người dùng
let checkuseremail = (useremail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: useremail } //kiem tra
            })
            if (user) {
                resolve(true)

            } else resolve(false)
        }
        catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin
}
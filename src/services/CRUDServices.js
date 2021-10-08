import bcrypt from 'bcryptjs';
import db from '../models/index';
var salt = bcrypt.genSaltSync(10); //thuật toán hash password của bcryptjs
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await hashUserpassword(data.password); //truyền biến password vào hàm để thực hiện hash
            await db.User.create({

                email: data.email,
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender,
                //image: DataTypes.STRING,
                //chưa thực hiện upload anh
                roleId: data.roleId,
                positionId: data.positionId,
            })

            console.log(data)
            console.log(hashPassword)
            resolve('Tạo user thành công')
        }
        catch (e) { reject(e); }
    })

}
let hashUserpassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {

        }
        catch (e) { reject(e); }
        var hash = await bcrypt.hashSync(password, salt);//hàm hash
        resolve(hash);
    })
}
let getallUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,
            });
            resolve(users);
        }
        catch (e) { reject(e); }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getallUser: getallUser,
}
import bcrypt from 'bcryptjs';
import db from '../models/index';
var salt = bcrypt.genSaltSync(10); //thuật toán hash password của bcryptjs
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await hashUserpassword(data.password); //truyền biến password vào hàm để thực hiện hash
            await db.User.create({
                id: data.id,
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
            let users = db.User.findAll({//load ra tất cả user trong db
                raw: true,
            });
            resolve(users);
        }
        catch (e) { reject(e); }
    })
}
let getUserInforById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }, //tìm user mà id =UserId
                raw: true,
            });
            if (user) {
                resolve(user); //trả về thông tin user
            }
            else {
                resolve([]); //trả về mảng rỗng nếu không tìm được
            }
        }

        catch (e) {
            reject(e);
        }
    })
}
let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id } //tìm user có id bằng id của user được truyền vào
            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                user.phoneNumber = data.phoneNumber;
                //gán dữ liệu bằng dữ liệu mới
                await user.save();
                let allUsers = await db.User.findAll();//tìm tất cả user
                resolve(allUsers);//trả về danh sách các user
            }
            else {
                resolve();
            }
            await db.User.update({})//update
        }
        catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getallUser: getallUser,
    getUserInforById: getUserInforById,
    updateUserData: updateUserData,
}
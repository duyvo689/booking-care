import userService from "../services/userservices";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    //kiểm tra email và password đã được điền chưa
    if (!email || !password) {
        return res.status(500).json({
            maloi: 1,
            thongbao: 'Điền đầy đủ email & password'
        })
    }
    let userData = await userService.handleUserLogin(email, password);
    return res.status(200).json(
        {
            maloi: userData.maloi,
            thongbao: userData.thongbao,
            user: userData.user ? userData.user : { 'thong bao': 'Khong hien thi thong tin user' }
        }
    )
}
module.exports = {
    handleLogin: handleLogin
}
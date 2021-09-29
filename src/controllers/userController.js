let handleLogin = (req,res) =>
{
    return res.status(200).json(
        {
            message: 'hellooooo'
        }
    );
}
module.exports = {
    handleLogin: handleLogin
}
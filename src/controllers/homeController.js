
let getHomePage = (req, res) => {
    return res.render('homeweb.ejs')
}

module.exports = {
    getHomePage: getHomePage,
}
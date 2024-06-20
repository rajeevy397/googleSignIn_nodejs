const getUserInfo = (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

const failureGoogleLogin = (req, res) => { 
    res.status(401).json({ message: "Error" }); 
}

module.exports = {
    getUserInfo,
    failureGoogleLogin
}

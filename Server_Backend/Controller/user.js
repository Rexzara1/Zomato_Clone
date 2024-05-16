const User = require('../Model/userDB')


exports.postSignUp = (req, res) => {
    const { email, password, name } = req.body;

    const userObj = new User ({
        email,
        password,
        name
    });

    userObj.save()
        .then(response => {
            res.status(200).json({
                message: "User details saved successfully",
                signup: response
            })
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
}

exports.postlogin = (req, res) => {
    const { email, password } = req.body;

    User.find({
        email,
        password
    })
    .then(response => {
        if(email == email && password == password && response.length > 0){
            res.status(200).json({
                message: "User details fetched successfully",
                login: response,
                isAuthenticated: true
            })
        }else{
            res.status(200).json({
                message: "User details not found",
                login: response,
                isAuthenticated: false
            })
        }
        
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}
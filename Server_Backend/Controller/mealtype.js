const Mealtype = require("../Model/mealtypeDB");

exports.getMealtype = (req, res) => {

    Mealtype.find()
    .then(response => {
        res.status(200).json({
            message: "Mealtype Fetched Successfully",
            meal: response
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}

exports.getMealtypeByName = (req, res) => {

    const {name} = req.params;
    Mealtype.find({name: name})
    .then(response => {
        res.status(200).json({
            message: "Mealtype by Name Fetched Successfully",
            meal: response
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}

exports.getMealtypeById = (req, res) => {

    const {id} = req.params;
    Mealtype.findById(id)
    .then(response => {
        res.status(200).json({
            message: "Mealtype by id Fetched Successfully",
            mealtype: response
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}
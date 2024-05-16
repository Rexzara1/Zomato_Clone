const Menu = require("../Model/menuDB");

exports.getMenuByRestaurantId = (req, res) => {
    const { resId } = req.params;

    Menu.find({ restaurantId : resId })
    .then(response => {
        res.status(200).json({
            message: "Menu by restaurant id Fetched Successfully",
            menu: response
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}
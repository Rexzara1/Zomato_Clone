const Restaurant = require("../Model/restaurantDB");

exports.getRestaurant = (req, res) => {

    Restaurant.find()
    .then(response => {
        res.status(200).json({
            message: "Restaurant Fetched Successfully",
            restaurant: response
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}

exports.getRestaurantByLocationId = (req, res) => {
//const filteredRestuarant = Restaurant.filter(i => i.city_name == city);
    const {locId} = req.params;


    Restaurant.find({city: locId}, {})
    .then(response => {
        res.status(200).json({
            message: "Restaurant's Location Fetched Successfully",
            restaurants: response
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}

exports.getRestaurantById = (req, res) => {

    const {id} = req.params;


    Restaurant.findById(id)
    .then(response => {
        res.status(200).json({
            message: "Restaurant's Id Fetched Successfully",
            restaurants: response
        })
    })
    .catch(err => {
        res.status(500).json({error:err})
    })
}

exports.filterRestuarant = (req, res) => {

    let { location, mealtype, lcost, hcost, cuisine, sort, page } = req.body;

    sort = sort ? sort : 1;         // 1-> Ascending Order, -1 -> Descending Order
    page = page ? page : 1;         // If no page is not specified, by default page- 1 will be selected

    const itemsPerPage = 2;     //Number of restaurant in a page
    const startIndex = page * itemsPerPage - itemsPerPage;
    const endIndex = page * itemsPerPage;

    var filterObj = {};         // empty object

    location && (filterObj["city"] = location);     // inserting a location data passed from the body to the filterObj
    mealtype && (filterObj["type.mealtype"] = mealtype);        // inserting a mealtype data passed from the body to the filterObj
    lcost && hcost && (filterObj["cost"] = {$gte: lcost, $lte: hcost});   // {gte - >=} {lte - <=}inserting a range to identify the cost of restaurant given from the body to the filter object   
    cuisine && (filterObj["Cuisine.cuisine"] = {$in: cuisine})

    console.log(filterObj)
    Restaurant.find(filterObj).sort({ cost: sort})
        .then(response => {
            const filteredResponse = response.slice(startIndex, endIndex);

            res.status(200).json({
                message: "Restaurant filterred Successfully",
                restaurant: filteredResponse
            })
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
}
const VehicalDetails= require("../models/vehicalDetails.js");


// CRUD of Vehical Details
const addVehicalDetails = (req, res) => {
    const newUser = new VehicalDetails(req.body);
    newUser
        .save()
        .then((vehicalDetails) => {
            res.json(vehicalDetails);
        })
        .catch((error) => {
            res.send(error);
        });
};

const getVehicalDetails = (req, res) => {
    VehicalDetails.find({})
        .then((vehicalDetails) => {
            res.json(vehicalDetails);
        })
        .catch((error) => {
            res.send(error);
        });
};

const deleteVehicalDetails = (req, res) => {
    const userId = req.params.id;
    VehicalDetails.findByIdAndDelete(userId)
        .then((user) => {
            if (!userId) {
                res.status(400).send("User Not Found");
            }
            res.send("User deleted Successfull");
        })
        .catch((error) => {
            res.json(error);
        });
};

const updateVehicalDetails = (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    VehicalDetails.findByIdAndUpdate(userId, updateData, { new: true })

        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json(error);
        });
};

// export to the route page
module.exports = {

    addVehicalDetails,
    getVehicalDetails,
    deleteVehicalDetails,
    updateVehicalDetails,

  };
  
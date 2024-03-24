const VehicalOwner = require("../models/vehicalOwner.js");


// CRUD of Vehical Owner
const addVehicalOwner = (req, res) => {
    const newUser = new VehicalOwner(req.body);
    newUser
        .save()
        .then((vehicalOwner) => {
            res.json(vehicalOwner);
        })
        .catch((error) => {
            res.send(error);
        });
};

const getVehicalOwner = (req, res) => {
    VehicalOwner.find({})
        .then((vehicalOwner) => {
            res.json(vehicalOwner);
        })
        .catch((error) => {
            res.send(error);
        });
};

const deleteVehicalOwner = (req, res) => {
    const userId = req.params.id;
    VehicalOwner.findByIdAndDelete(userId)
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

const updateVehicalOwner = (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    VehicalOwner.findByIdAndUpdate(userId, updateData, { new: true })

        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json(error);
        });
};

// export to the route page
module.exports = {
    addVehicalOwner,
    getVehicalOwner,
    deleteVehicalOwner,
    updateVehicalOwner,

  };
  
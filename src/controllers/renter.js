const {
    Renter
} = require("../model/model.js");

// CRUD of Renter
const addRenter = (req, res) => {
    const newUser = new Renter(req.body);
    newUser
        .save()
        .then((renter) => {
            res.json(renter);
        })
        .catch((error) => {
            res.send(error);
        });
};

const getRenter = (req, res) => {
    Renter.find({})
        .then((renter) => {
            res.json(renter);
        })
        .catch((error) => {
            res.send(error);
        });
};

const deleteRenter = (req, res) => {
    const userId = req.params.id;
    Renter.findByIdAndDelete(userId)
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

const updateRenter = (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    Renter.findByIdAndUpdate(userId, updateData, { new: true })

        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json(error);
        });
};

// export to the route page
module.exports = {
    addRenter,
    getRenter,
    deleteRenter,
    updateRenter,
  };
  
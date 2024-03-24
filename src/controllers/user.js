const {
    User
} = require("../model/model.js");

// CRUD of User
const addNewUser = (req, res) => {
    const newUser = new User(req.body);
    newUser
        .save()
        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.send(error);
        });
};

const getUser = (req, res) => {
    User.find({})
        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.send(error);
        });
};

const deleteUser = (req, res) => {
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
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

const updateUser = (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    User.findByIdAndUpdate(userId, updateData, { new: true })

        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json(error);
        });
};

// export to the route page
module.exports = {
    addNewUser,
    getUser,
    deleteUser,
    updateUser,
  };
  
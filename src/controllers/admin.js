const Admin = require("../models/admin.js");

// CRUD of Admin
const addAdmin = (req, res) => {
    const newUser = new Admin(req.body);
    newUser
        .save()
        .then((admin) => {
            res.json(admin);
        })
        .catch((error) => {
            res.send(error);
        });
};

const getAdmin = (req, res) => {
    Admin.find({})
        .then((admin) => {
            res.json(admin);
        })
        .catch((error) => {
            res.send(error);
        });
};

const deleteAdmin = (req, res) => {
    const userId = req.params.id;
    Admin.findByIdAndDelete(userId)
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

const updateAdmin = (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    Admin.findByIdAndUpdate(userId, updateData, { new: true })

        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json(error);
        });
};

// export to the route page
module.exports = {
    addAdmin,
    getAdmin,
    deleteAdmin,
    updateAdmin,
};

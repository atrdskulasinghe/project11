const {
    Contact,
} = require("../model/model.js");


// CRUD of contact
const addContact = (req, res) => {
    const newUser = new Contact(req.body);
    newUser
        .save()
        .then((contact) => {
            res.json(contact);
        })
        .catch((error) => {
            res.send(error);
        });
};

const getContact = (req, res) => {
    Contact.find({})
        .then((contact) => {
            res.json(contact);
        })
        .catch((error) => {
            res.send(error);
        });
};

const deleteContact = (req, res) => {
    const userId = req.params.id;
    Contact.findByIdAndDelete(userId)
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

const updateContact = (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    Contact.findByIdAndUpdate(userId, updateData, { new: true })

        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json(error);
        });
};


// export to the route page
module.exports = {
    addContact,
    getContact,
    deleteContact,
    updateContact,
  };
  
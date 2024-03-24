const {
    Payment
} = require("../model/model.js");


// CRUD of payment
const addPayment = (req, res) => {
    const newUser = new Payment(req.body);
    newUser
        .save()
        .then((payment) => {
            res.json(payment);
        })
        .catch((error) => {
            res.send(error);
        });
};

const getPayment = (req, res) => {
    Payment.find({})
        .then((payment) => {
            res.json(payment);
        })
        .catch((error) => {
            res.send(error);
        });
};

const deletePayment = (req, res) => {
    const userId = req.params.id;
    Payment.findByIdAndDelete(userId)
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

const updatePayment = (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    Payment.findByIdAndUpdate(userId, updateData, { new: true })

        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json(error);
        });
};

// export to the route page
module.exports = {

    addPayment,
    getPayment,
    deletePayment,
    updatePayment,

  };
  
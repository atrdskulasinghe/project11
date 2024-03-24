const {
    BookingDetails
} = require("../model/model.js");

// CRUD of Booking Details
const addBookingDetails = (req, res) => {
    const newUser = new BookingDetails(req.body);
    newUser
        .save()
        .then((bookingDetails) => {
            res.json(bookingDetails);
        })
        .catch((error) => {
            res.send(error);
        });
};

const getBookingDetails = (req, res) => {
    BookingDetails.find({})
        .then((bookingDetails) => {
            res.json(bookingDetails);
        })
        .catch((error) => {
            res.send(error);
        });
};

const deleteBookingDetails = (req, res) => {
    const userId = req.params.id;
    BookingDetails.findByIdAndDelete(userId)
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

const updateBookingDetails = (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    BookingDetails.findByIdAndUpdate(userId, updateData, { new: true })

        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json(error);
        });
};


// export to the route page
module.exports = {
    addBookingDetails,
    getBookingDetails,
    deleteBookingDetails,
    updateBookingDetails,
  };
  
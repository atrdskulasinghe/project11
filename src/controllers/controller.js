const {
  User,
  Admin,
  Renter,
  VehicalOwner,
  VehicalDetails,
  VehicleImage,
  BookingDetails,
  Feedback,
  Payment,
  Contact,
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

// CRUD of Vehicle Image
const addVehicalImage = (req, res) => {
  const newUser = new VehicleImage(req.body);
  newUser
    .save()
    .then((vehicleImage) => {
      res.json(vehicleImage);
    })
    .catch((error) => {
      res.send(error);
    });
};

const getVehicalImage = (req, res) => {
  VehicleImage.find({})
    .then((vehicleImage) => {
      res.json(vehicleImage);
    })
    .catch((error) => {
      res.send(error);
    });
};

const deleteVehicalImage = (req, res) => {
  const userId = req.params.id;
  VehicleImage.findByIdAndDelete(userId)
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

const updateVehicalImage = (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;

  VehicleImage.findByIdAndUpdate(userId, updateData, { new: true })

    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

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

// CRUD of feedback
const addFeedback = (req, res) => {
  const newUser = new Feedback(req.body);
  newUser
    .save()
    .then((feedback) => {
      res.json(feedback);
    })
    .catch((error) => {
      res.send(error);
    });
};

const getFeedback = (req, res) => {
  Feedback.find({})
    .then((feedback) => {
      res.json(feedback);
    })
    .catch((error) => {
      res.send(error);
    });
};

const deleteFeedback = (req, res) => {
  const userId = req.params.id;
  Feedback.findByIdAndDelete(userId)
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

const updateFeedback = (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;

  Feedback.findByIdAndUpdate(userId, updateData, { new: true })

    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json(error);
    });
};

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
  addNewUser,
  getUser,
  deleteUser,
  updateUser,

  addAdmin,
  getAdmin,
  deleteAdmin,
  updateAdmin,

  addRenter,
  getRenter,
  deleteRenter,
  updateRenter,

  addVehicalOwner,
  getVehicalOwner,
  deleteVehicalOwner,
  updateVehicalOwner,

  addVehicalDetails,
  getVehicalDetails,
  deleteVehicalDetails,
  updateVehicalDetails,

  addVehicalImage,
  getVehicalImage,
  deleteVehicalImage,
  updateVehicalImage,

  addBookingDetails,
  getBookingDetails,
  deleteBookingDetails,
  updateBookingDetails,

  addFeedback,
  getFeedback,
  deleteFeedback,
  updateFeedback,

  addPayment,
  getPayment,
  deletePayment,
  updatePayment,

  addContact,
  getContact,
  deleteContact,
  updateContact,
};

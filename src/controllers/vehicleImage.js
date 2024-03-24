
const {
    VehicleImage
  } = require("../model/model.js");
  

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
  

  // export to the route page
module.exports = {
  addVehicalImage,
  getVehicalImage,
  deleteVehicalImage,
  updateVehicalImage,

};

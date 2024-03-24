const Feedback = require("../models/feedback.js");

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

// export to the route page
module.exports = {
    addFeedback,
    getFeedback,
    deleteFeedback,
    updateFeedback,

};

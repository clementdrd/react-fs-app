const express = require("express");
const router = express.Router();

const Course = require("../models/Course");

/*
router.get('/api/courses', (req, res) => {
    res.send("Hi, we are now at courses route");
});
    Pareil que de faire la ligne du bas
*/

/*
router.get('/', (req, res) => {
    res.send("Hi, we are now at courses route");
    console.log("yoooo")
});
*/

router.get('/', (req, res) => {
    Course.find()
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ message: err});
        });

});

router.get('/1', (req, res) => {
    res.send("Hi, we are now at courses number 1");
    console.log("bravo l'artiste")
});

router.post("/", (req, res) => {
    const mycourse = new Course({
        course: req.body.course,
        tag: req.body.tag
    });

    mycourse
        .save()
        .then(result => {
            res.status(201).json({
                message: "Handling POST request to /api/courses - SUCCESS!",
                result
            });
            //console.log(result);
        })
        .catch(err => {
            res.status(500).json({
                message: err 
            });
            //console.log(err);
        });
});

module.exports = router;
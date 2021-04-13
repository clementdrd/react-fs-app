const express = require("express");
const router = express.Router();

const Course = require("../models/Course");

/*
router.get('/api/courses', (req, res) => {
    res.send("Hi, we are now at courses route");
});
    Pareil que de faire la ligne du bas
*/

router.get('/', (req, res) => {
    res.send("Hi, we are now at courses route");
    console.log("yoooo")
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
            //res.json(result);
            console.log(result);
        })
        .catch(err => {
            //res.json({ message: err });
            console.log(err);
        });
});

module.exports = router;
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

router.get('/', (req, res) => {
    Course.find()
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });

});
SAME CODE BELOW BUT WITH AWAIT and ASYNC
*/

router.get('/', async(req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});


//router.get('/1', (req, res) => {
//    res.send("Hi, we are now at courses number 1");
//    console.log("bravo l'artiste")
//});
/*
router.get("/:courseId", (req, res) => {
    const id = req.params.courseId;
    Course.findById(id)
        .exec()
        .then(result => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "No valid entry found" });
            }
        })
        .catch(err => {
            res.status(500).json({ messae: err });
        })
})
SAME CODE AS BELOW BUT WITH AWAIT and ASYNC
*/

router.get("/:courseId", async(req, res) => {
    try {
        const id = req.params.courseId;
        const course = await Course.findById(id);
        if (course) {
            res.status(200).json(course);
        } else {
            res.status(404).json({ message: "No valid entry found" })
        }
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

/*
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
SAME AS CODE BELOW BUT WITH AWAIT AND ASYNC
*/

router.post("/", async(req, res) => {
    const mycourse = new Course({
        course: req.body.course,
        tag: req.body.tag
    });

    try {
        const savedCourse = await mycourse.save();
        res.status(201).json({
            message: "Handling POST request to /api/courses - Success!",
            createdCourse: savedCourse
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.patch("/:courseId", async(req, res) => {
    try {
        const id = req.params.courseId;
        const updatedCourse = await Course.updateOne({ _id: id }, {
            $set: { course: req.body.course, tag: req.body.tag }
        });
        res.status(200).json(updatedCourse);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.delete("/:courseId", async(req, res) => {
    try {
        const id = req.params.courseId;
        const removedCourse = await Course.remove({ _id: id });
        res.status(200).json(removedCourse);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});


module.exports = router;
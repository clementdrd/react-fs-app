const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const routeCourses = require("./routes/courses")
    //Midleware
app.use("/api/courses", routeCourses);

app.get("/", (req, res) => {
    res.send("Welcome to express tutorial!")
});
/*
app.get("/api", (req, res) => {
    res.send([
            { id: "1", course: "React Tutorial", tag: "react" },
         { id: "2", course: "Object-oriented programming (OOP)", tag: "oop" },
         { id: "3", course: "The Complete React Native Course", tag: "react" },
         { id: "4", course: "Java Programming", tag: "java" },
         { id: "5", course: "JavaScript Course", tag: "javascript" },
         { id: "6", course: "Spring Boot Tutorial", tag: "spring" },
         { id: "7", course: "Python Bootcamp", tag: "python" },
         { id: "8", course: "Spring Framework Course", tag: "spring" },
         { id: "9", course: "React - The Complete Course", tag: "react" },
         { id: "11", course: "ReactJS + Hooks Course", tag: "react" },
         { id: "12", course: "React with Redux", tag: "react" },
         { id: "13", course: "Advanced React Native and Redux", tag: "react" },
         { id: "14", course: "C#: Classes and OOP", tag: "oop" },
         { id: "15", course: "React with Redux", tag: "react" },
         { id: "16", course: "Java Masterclass", tag: "java" },
         {
           id: "17",
           course: "Modern JavaScript from Zero to Hero",
           tag: "javascript"
         },
         { id: "18", course: "ES6 JavaScript Training", tag: "javascript" },
         { id: "19", course: "Learn Python Programming", tag: "python" },
         { id: "20", course: "Master Microservices with Java", tag: "java" }])
})
*/
console.log("Moogose Status Code if 0 = not connected if 1 = connected")
console.log(mongoose.connection.readyState);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log(mongoose.connection.readyState)

);

const port = process.env.PORT || 5125;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
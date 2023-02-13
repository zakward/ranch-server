const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const path = require('path');
const {expressjwt} = require("express-jwt")
uri = process.env.MONGODB_URI
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(morgan("dev"))


// connect to

mongoose.connect(
    "mongodb+srv://zakward85:sGgE8nsURyQQYT4D@cluster0.qps3fqv.mongodb.net/?retryWrites=true&w=majority",
    (err) => {
        if (err) throw err
        console.log("Connected to the DataBase")
    }
)
 
//routes

// NOTE: changed tasks to projects on the front end
// app.use("/chores", require("./routes/choresRouter.js"))
// app.use("/chores", require("./routes/choresRouter.js"))
// app.use("/tasks", require("./routes/tasksRouter.js")) //extra projects
// app.use("/supplies", require("./routes/suppliesRouter.js"))
// app.use("/auth", require("./routes/authRouter.js"))
// app.use("/api", expressjwt({secret: process.env.SECRET, algorithms:['HS256']}))


app.use((err, req, res, nexdt) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})




app.listen(PORT, () => {
    console.log(`The Server is running on Port ${PORT}`)
})
const express = require("express")
const choresRouter = express.Router()
const Chore = require("../models/chore.js")


choresRouter.get("/", (req, res, next) => {
    Chore.find((err, chore) =>  {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(chore)
    })
})

//post one
choresRouter.post("/", (req, res, next) => {
    
    const newChore = new Chore(req.body) 
    newChore.save((err, savedChore) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedChore)
    })
})


module.exports = choresRouter
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const choreSchema = new Schema( {

   name : {
        type : String,
        required: true
    },
    imgUrl: {
        type: String
    },
    priority: {
        type: Boolean
    },
    instructions: {
        type: String
    },
    complete: {
        type: Boolean,
        default: false
    },
    timeOfDay: {
        type: String
    }
}    
)

module.exports = mongoose.model("Chore", choreSchema)
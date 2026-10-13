const monngoose = require("mongoose")

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        reuired:true
    },
    adressLine1:{
        type:String,
        reuired:true
    },
    adressLine2:{
        type:String,
        reuired:true
    },
    city:{
        type:String,
        reuired:true
    },
    pincode:{
        type:Number,
        reuired:true
    },
    specializedIn:[
        {
            type:String,
            required:true
        }
    ]

},{timestamps:true})


export const Hospital = mongoose.model("Hospital",hospitalSchema)
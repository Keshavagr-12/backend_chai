import mongoose from "mongoose"

const monngoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        reuired:true
    },
    diagnosedWith:{
        type:String,
        reuired:true
    },
    adress:{
        type:String,
        reuired:true
    },
    age:{
        type:Number,
        reuired:true
    },
    bloodGroup:{
        type:String,
        reuired:true
    },
    gender:{
        type:String,
        enum:["M","F","O"],
        required:true
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospiatl"
    }

},{timestamps:true})


export const Patient = mongoose.model("Patient",patientSchema)
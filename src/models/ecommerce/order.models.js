const mongoose = require("mongoose");



const orderIemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products"
    },
    quantity:{
        type:Number,
        required:true
    }

})





const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderTems:{
        type:Number,
        required:true
    },
    orderPrice:{
        type:Number,
        required:true
    }, 
    orderItems:{
        type:[orderIemSchema],

    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }
}, {timestamps:true});

export const Order = mongoose.model("Order ", orderSchema);

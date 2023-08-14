import { Schema, model, models } from 'mongoose';
const ReactFormDataSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    } ,
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"user",
        enum:["user",'admin','root']
    }
 },{
   timestamps:true  
});

const User = models.User ||  model('User', ReactFormDataSchema);
module.exports = User;
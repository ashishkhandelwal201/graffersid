// require mongoose
import { mongoose  } from '../utils/import.js'

const userSchema = mongoose.Schema({

    _id : Number,
   
    username : {
        type : String,
        required : [true,"User Name is required"],
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type : String,
        required : [true , "Password is required"],
        maxlength : 10,
        minlength : 4,
        trim : true
    },
    email:{
        type : String,
        required : [true , "email is required"],
        lowercase : true,
        trim : true
    },
    mobile : {
        type : Number,
        required : [true , "Mobile is required"],
        maxlength : 10,
        minlength : 10,
        trim : true
    },
    address:{
        type : String,
        required : [true , "Company Address is required"],
        trim : true
    },
    city:{
        type : String,
        required : [true , "City is required"],
        trim : true
    },
    logopath : {
        type : String,
        trim : true
    },
    role : {
        type : String,
        required : true,
        trim : true,
    },
    isdeleted : {
        type : Number,
        trim : true
    },
    status : {
        type : Number,
        required : true,
        trim : true
    },
    info : {
        type : Date,
        required : true,
        trim : true
    }

    

})


const userSchemaModel = mongoose.model('user_tmp',userSchema,"user")


// now we have to export this instance to modal so through the modal it save the data inside the DB with this above configurations
export default userSchemaModel;
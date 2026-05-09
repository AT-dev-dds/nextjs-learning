import mongoose from 'mongoose'


 const feedbackSchema= new mongoose.Schema({
    message:{
        type:String,
        required:[true,"message is required"],
        
        trim:true,

        minlength:[3," Message must contain 3 characters"],

        maxlength:[200,"Message must not be more than 200 characters"]
    },
},{timestamps:true});


const Feedback= mongoose.models.Feedback || mongoose.model("Feedback",feedbackSchema);

export default Feedback;
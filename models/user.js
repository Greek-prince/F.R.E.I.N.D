const mongoose= require('mongoose')
mongoose.connect(`mongodb://127.0.0.1:27017/testapp1`);
const userSchema=mongoose.Schema({
    name:String,
    image:String,
    passion:String
})
module.exports= mongoose.model("User",userSchema)
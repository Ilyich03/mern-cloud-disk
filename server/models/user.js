const {Schema, model, ObjectId} = require('mongoose')

const User = new Schema ({
    userName:{type: String, required: true, unique:true},
    email:{type: String, required: true, unique: true}, 
    password:{type: String, required: true, unique: true}, 
    diskSpace:{type: Number, default:1024**3*10, }, 
    usedSpace:{type: Number, default: 0}, 
    avatar:{type: String}, 
    files: [{ type: ObjectId, ref: "File"}]
})

module.exports = model('User', User)
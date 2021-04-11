const mongoose = require('mongoose');

const UserSchema = new Schema({
    userID: {type: Number, required: true, maxlength:9},
    name: {type: String, required: true, trim: true},
    surname: {type: String, required: true,trim: true},
    faculty: {type: String, required: false},
    program: {type: String, required: false},
    semester: {type: Number, required:false},
    /*password: {type: String, required: true},*/
    email: {type: String, required: true, unique: true},
    isSAO: {type: Boolean, default:false},
    isAdmin: {type: Boolean, default:false},
    isDeleted: {type: Boolean,default:false}
    },
    {
   timestamps:true
});

/*UserSchema.methods.generateHash = function(password) {
    return bcryptjs.hashSync(password, bcryptjs.genSaltSync(8),null);
};

UserSchema.methods.validPassword = function(password) {
    return bcryptjs.compareSync(password,this.password);
};*/
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);

/* for testing
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add your name'],
        unique: true,
        trim: true
    }
})
*/
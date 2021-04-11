const mongoose = require('mongoose');

const UserSessionSchema = new Schema({
    userId: {type: String, required: true, unique: true},
    token: {type: String, required: true}
},{
    timestamps:true
});

module.exports = mongoose.models.UserSession || mongoose.model('Course', UserSessionSchema);
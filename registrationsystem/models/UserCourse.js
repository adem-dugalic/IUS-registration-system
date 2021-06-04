const mongoose = require('mongoose');

const UserCoursesSchema = new Schema({
    userId: {type: String, required: true},
    courses: {type: Array},
    isOwner: {type: Boolean}
});

module.exports = mongoose.models.UserCourse || mongoose.model('UserCourse', UserCoursesSchema);
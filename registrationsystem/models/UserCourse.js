const mongoose = require('mongoose');

const UserCoursesSchema = new Schema({
    userId: {type: String, required: true},
    courses: {type: Array} 
});

module.exports = mongoose.models.UserCourse || mongoose.model('Course', UserCoursesSchema);
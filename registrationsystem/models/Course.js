import mongoose  from 'mongoose';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    course_id: {type: String, required: true, unique: true/*,index: true*/},
    course_name: {type: String},
    Lecturer: {type: String},
    AcademicUnit: {type: String},
    prerequisite: {type: Array},
    UpdatedDate: {type: Date},
    Url: {type: String}
});
module.exports = mongoose.models.Course || mongoose.model('Course', CourseSchema);
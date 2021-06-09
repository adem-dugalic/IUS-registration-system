import mongoose  from 'mongoose';

const Schema = mongoose.Schema;

const UserCourseDetailsSchema = new Schema({
    userId: {type: String, required: true},
    courseId: {type: String, required: true},
    numberOfTupples: {type: Number},
    tuppleNames: {type: Array},
    finalGrade: {type: String},
    classAverage: {type: Number},
    grades: {type: Float32Array}
});

module.exports = mongoose.models.UserCourseDetails || mongoose.model('UserCourseDetails', UserCourseDetailsSchema);
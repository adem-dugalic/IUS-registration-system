import mongoose  from 'mongoose';

const Schema = mongoose.Schema;

const PaymentRecordsSchema = new Schema({
    userId: {type: String, required: true},
    originalPrice: {type: Number},
    discount: {type: Number}
});

module.exports = mongoose.models.UserCourse || mongoose.model('PaymentRecords', PaymentRecordsSchema);
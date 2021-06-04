const mongoose = require('mongoose');

const PaymentRecordsSchema = new Schema({
    userId: {type: String, required: true},
    originalPrice: {type: Number},
    discount: {type: Number}
});

module.exports = mongoose.models.UserCourse || mongoose.model('PaymentRecords', PaymentRecordsSchema);
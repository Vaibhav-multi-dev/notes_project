const mongoose = require('mongoose');
const { Schema } = mongoose;

const sectionSchema = new Schema({
    num: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    lectures: String,
    sectype: {
        type: String,
        enum: ['html', 'css', 'js', 'backend'],
        required: true
    }
})

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
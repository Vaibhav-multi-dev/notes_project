const mongoose = require('mongoose');
const { Schema } = mongoose;

const lectureSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        default: '["Your title here]'
    }
})

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
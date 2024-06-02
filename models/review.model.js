import{ Schema, model } from 'mongoose';

const schema = new Schema({
    'studentName': {
        type: String,
        required: true
    },
    'city': {
        type: String,
        required: true
    },
    'stream': {
        type: String,
        required: true
    },
    'examYear': {
        type: Number,
        required: true
    },
    'review': {
        type: String,
        required: true
    }
})

// create model
const Review = model('Review', schema);

export default Review;
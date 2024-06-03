import{ Schema, model } from 'mongoose';

const schema = new Schema({
    'studentName': {
        type: String,
    },
    'city': {
        type: String,
        required: true
    },
    'indexNo': {
        type: Number,
        required: true
    },
    'stream': {
        type: String,
        enum: ['Biological Science', 'Physical Science'],
        required: true
    },
    'examYear': {
        type: Number,
        enum: [2020, 2021, 2022, 2023, 2024],
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
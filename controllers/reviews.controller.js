import Review from "../models/review.model.js";

export const ReviewIndex = (req, res) => {
    res.send("Get all the review list");
};

export const ReviewCreate = async(req, res) => {
    console.log(req.body);

    // Validate request
    const newReview = new Review({
        'studentName': req.body.studentName,
        'city': req.body.city,
        'stream': req.body.stream,
        'examYear': req.body.examYear,
        'review': req.body.review
    });

    try {
        const review = await newReview.save();
        return res.status(201).json(review);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export const ReviewUpdate = (req, res) => {
    res.send("Update the review");
};

export const ReviewDelete = (req, res) => {
    res.send("Delete the review");
};
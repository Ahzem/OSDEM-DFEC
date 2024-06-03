import Review from "../models/review.model.js";

export const ReviewIndex = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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
        return res.status(500).json({ error: error.message });
    }
};

// export const ReviewUpdate = (req, res) => {
//     try {
//         Review.findByIdAndUpdate(req.params.id, req.body).then(review => {
//             if (!review) {
//                 return res.status(404).send({
//                     message: "Review not found with id " + req.params.id
//                 });
//             }
//             res.send(review);
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                     message: "Review not found with id " + req.params.id
//                 });
//             }
//             return res.status(500).send({
//                 message: "Error updating Review with id " + req.params.id
//             });
//         });
//     }
//     catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// export const ReviewDelete = (req, res) => {
//     try {
//         Review.findByIdAndRemove(req.params.id).then(review => {
//             if (!review) {
//                 return res.status(404).send({
//                     message: "Review not found with id " + req.params.id
//                 });
//             }
//             res.send({ message: "Review deleted successfully!" });
//         }).catch(err => {
//             if (err.kind === 'ObjectId' || err.name === 'NotFound') {
//                 return res.status(404).send({
//                     message: "Review not found with id " + req.params.id
//                 });
//             }
//             return res.status(500).send({
//                 message: "Could not delete Review with id " + req.params.id
//             });
//         });
//     }
//     catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
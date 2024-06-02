export const ReviewIndex = (req, res) => {
    res.send("Get all the review list");
};

export const ReviewCreate = (req, res) => {
    console.log(req.body);
    return res.json(req.body);
}

export const ReviewUpdate = (req, res) => {
    res.send("Update the review");
}

export const ReviewDelete = (req, res) => {
    res.send("Delete the review");
}
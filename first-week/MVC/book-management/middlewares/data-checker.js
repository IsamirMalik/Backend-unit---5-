const dataCheck = (req , res , next) => {
    let { title , author , genre , published_year } = req.body;

    if(!title || !author || !genre || !published_year){
        res.status(400).json({ "message": "Insufficient data , All fields are required" });
    } else{
        next();
    }
};

module.exports = dataCheck;
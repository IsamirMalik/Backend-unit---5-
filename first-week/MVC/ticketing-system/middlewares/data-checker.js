const checkData = (req,res,next) => {
    let { title , user , priority , description } = req.body;

    if(!title || !user || !priority || !description){
        res.status(400).json({ "message": "Insufficient data , All fields are required" });
    }else{
        next();
    }
};

module.exports = checkData ;
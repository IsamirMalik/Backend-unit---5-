const authMiddleware = (req , res , next) =>{
    console.log("Auth Middleware");
    const token = req.headers?.authorization?.split(" ")[1];
    if(token){
        next();
    }else {
        res.status(401).json({message:"Unauthorized"});
    }
    
}

module.exports = authMiddleware;
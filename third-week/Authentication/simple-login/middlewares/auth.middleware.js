var jwt = require('jsonwebtoken');

const authMiddleware = (req,res, next)=>{
    /// checks the token 
    // if token valid , then allow next 
    // else send response as UnAuthorised

    /// how to send token??
   
    let token = req.headers?.authorization?.split(" ")[1]
    //console.log(token)
    if(token){
        var decoded = jwt.verify(token,process.env.JWT_SECRET_KEY );
        ///console.log(decoded)
        // if decoded working fine, which means we verified the token
        if(decoded){
            /// attach the decrypted data to the req
            req.user = decoded.userId;
            next()
        }else{
            res.status(403).json({message:"Login Failed, Please Login Again"})
        }
       
        // console.log("Passed Through Auth Middleware")
       
    }else{
        res.status(400).json({message:"Unauthorised"})
    }
   
}


module.exports = authMiddleware;
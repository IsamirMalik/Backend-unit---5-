var jwt = require('jsonwebtoken');
const secretKey = "password";

const authMiddleware = (req, res, next) => {
    console.log("Auth Middleware");
    const token = req.headers?.authorization?.split(" ")[1];
    if (token) {
        var decoded = jwt.verify(token, secretKey);
        if (decoded) {
            req.user = decoded.userId ;
            next();
        } else {
            res.status(401).json({ message: "Login Failed" });
        }

    } else {
        res.status(401).json({ message: "Unauthorized" });
    }

}

module.exports = authMiddleware;
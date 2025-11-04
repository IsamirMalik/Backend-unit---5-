const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../model/user.model');

const secretKey = "password";

const authMiddleware = (role) => {
    return (req, res, next) => {
        try {
            
            const token = req.headers?.authorization?.split(" ")[1];
            if (token) {
                var decoded = jwt.verify(token, secretKey);
                console.log(decoded);
                if (decoded) {
                    if (role.includes(decoded.role)) {
                        // console.log(decoded);
                        req.user = decoded.userId;
                        next();
                    } else {
                      // console.log('failing from here')
                        res.status(401).json({ message: "Unauthorized" });
                    }
                } else {
                    res.status(401).json({ message: "Login Failed" });
                }

            } else {
                res.status(401).json({ message: "Unauthorized" });
            }
        } catch (error) {
            if (error.message === "jwt expired") {
                res.status(401).json({ message: "Token Expired , Login Again" });
            } else {
                res.status(500).json({ message: "Something went wrong" });
            }
        }

    }
}

module.exports = authMiddleware;
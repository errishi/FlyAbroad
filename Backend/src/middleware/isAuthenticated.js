import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';


export const isAuthenticated = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;

        if(!authorizationHeader || !authorizationHeader.startsWith("Bearer ")){
            return res.status(401).json({success: false, message: "Authorization header missing"})
        }
        const token = authorizationHeader.split(" ")[1]


        jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
            if (err) {
                if (err.name === "TokenExpiredError") {
                    return res.status(400 ).json({ success: false, message: "Token expired" });
                }
                return res.status(400).json({ success: false, message: "Invalid token" });
            }
            const {id} = decoded;

            const foundUser = await User.findById(id);
            if(!foundUser){
                return res.status(404).json({success: false, message: "User not found"})
            }
            req.userId = foundUser._id;
            next();
            
            
        })

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }

}
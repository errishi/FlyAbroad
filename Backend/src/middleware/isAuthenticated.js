import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET || process.env.SECRET_KEY;

const getTokenFromCookieHeader = (cookieHeader) => {
    if (!cookieHeader) return null;
    return cookieHeader.split(';').reduce((token, cookie) => {
        const [name, value] = cookie.split('=');
        if (!name || !value) return token;
        const key = name.trim();
        const val = decodeURIComponent(value.trim());
        if (key === 'accessToken' || key === 'token') {
            return val;
        }
        return token;
    }, null);
};

export const isAuthenticated = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        let token = null;

        if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
            token = authorizationHeader.split(' ')[1];
        } else if (req.body?.token) {
            token = req.body.token;
        } else if (req.query?.token) {
            token = req.query.token;
        } else {
            token = getTokenFromCookieHeader(req.headers.cookie);
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token missing. Use Authorization: Bearer <token>, body.token, ?token=<token>, or cookie accessToken.'
            });
        }

        jwt.verify(token, JWT_SECRET, async (err, decoded) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(400).json({ success: false, message: 'Access token has expired, use refresh token to generate again' });
                }
                return res.status(400).json({ success: false, message: 'Invalid access token' });
            }

            const { id } = decoded;
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }

            req.userId = user._id;
            next();
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
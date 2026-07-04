// middleware/roleCheck.js

export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // 1. Check if the user object exists 
        // (This ensures your authentication middleware ran first)
        if (!req.user) {
            return res.status(401).json({ 
                message: "Unauthorized: User authentication required." 
            });
        }

        // 2. Check if the user's role is included in the allowed roles array
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ 
                message: `Forbidden: Your role (${req.user.role}) does not have permission to access this resource.` 
            });
        }

        // 3. If they have the right role, allow them to proceed to the controller
        next();
    };
};
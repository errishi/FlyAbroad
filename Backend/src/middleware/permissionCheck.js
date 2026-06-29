export const authorizeTask = (requiredTask) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized." });
        }

        // Super Admins bypass task checks entirely
        if (req.user.role === 'super_admin') {
            return next();
        }

        // For regular admins, check if the required task is in their array
        if (req.user.permissions && req.user.permissions.includes(requiredTask)) {
            return next();
        }

        // If they don't have the task, deny access
        return res.status(403).json({ 
            success: false,
            message: `Forbidden: You have not been assigned the task: ${requiredTask}` 
        });
    };
};
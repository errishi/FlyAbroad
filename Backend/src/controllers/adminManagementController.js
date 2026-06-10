import { User } from "../models/userModel.js";

export const assignTaskToAdmin = async (req, res) => {
        try {
            const { tasks } = req.body; // e.g., ['manage_blogs', 'view_analytics']

            // Ensure the target user actually exists and is an admin
            const targetAdmin = await User.findById(req.params.adminId);
            
            if (!targetAdmin) return res.status(404).json({ 
                success: false,
                message: "User not found" 
            });

            if (targetAdmin.role !== 'admin') {
                return res.status(400).json({ 
                    success: false,
                    message: "Tasks can only be assigned to admins." 
                });
            }

            // Update their permissions
            targetAdmin.permissions = tasks;
            await targetAdmin.save();

            res.json({ 
                message: "Tasks assigned successfully!", 
                admin: { username: targetAdmin.username, permissions: targetAdmin.permissions } 
            });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
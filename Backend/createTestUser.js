import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isLoggedIn: { type: Boolean, default: false },
    token: { type: String, default: null },
    otp: { type: String, default: null },
    otpExpiry: { type: Date, default: null },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

async function createTestUser() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');

        // Check if user already exists
        const existingUser = await User.findOne({ email: 'johndoe@example.com' });
        if (existingUser) {
            console.log('Test user already exists');
            await mongoose.connection.close();
            return;
        }

        const hashedPassword = await bcrypt.hash('Password@123', 10);
        
        const testUser = new User({
            username: 'johndoe',
            email: 'johndoe@example.com',
            password: hashedPassword,
            isVerified: true,
            isLoggedIn: false
        });

        await testUser.save();
        console.log('✓ Test user created successfully');
        console.log('Email: johndoe@example.com');
        console.log('Password: Password@123');
        
        await mongoose.connection.close();
    } catch (error) {
        console.error('Error creating test user:', error.message);
        process.exit(1);
    }
}

createTestUser();

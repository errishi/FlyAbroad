import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function clearSessions() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');

        const db = mongoose.connection;
        await db.dropCollection('sessions');
        console.log('✓ All sessions cleared');
        
        await mongoose.connection.close();
    } catch (error) {
        if (error.message.includes('ns not found')) {
            console.log('✓ Sessions collection already empty');
            process.exit(0);
        }
        console.error('Error clearing sessions:', error.message);
        process.exit(1);
    }
}

clearSessions();

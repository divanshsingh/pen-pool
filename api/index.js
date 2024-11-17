import express from 'express';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json())

// Use the userRoutes for the /api/user path
app.use("/api/user", userRoutes);
app.use("/api/auth/", authRoutes)

// Start the server
app.listen(3000, () => {
    console.log("Server is listening on port: 3000");
});

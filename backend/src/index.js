import express from 'express';
import authrouter from '/routes/auth.route.js';

const app = express();
app.use("/api/auth", authRoutes)

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});
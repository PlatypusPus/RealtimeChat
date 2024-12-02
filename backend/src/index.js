import express from 'express';
import router from './routes/auth.route.js';

const app = express();
app.use("/api/auth", router);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});
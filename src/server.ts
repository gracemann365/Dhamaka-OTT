import express from 'express';
import mongoose from 'mongoose';
import moviesRouter from './routes/moviesRouter';

// Connect to MongoDB Atlas
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=<appname>";

// Replace <username> with your MongoDB username.
// Replace <password> with your MongoDB password.
// Replace <dbname> with the name of the database you want to connect to.
// Replace <appname> with the name of your application.


mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('MongoDB Atlas connection error:', error);
});

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

// Use the moviesRouter for movie-related endpoints
app.use('/movies', moviesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;


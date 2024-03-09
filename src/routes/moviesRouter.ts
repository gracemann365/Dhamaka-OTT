import { Request, Response, Router } from 'express';
import isAdmin from '../middleware/isAdmin';
import Movie from '../models/Movie';

const router = Router();

// GET /movies
router.get('/', async (req: Request, res: Response) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /search?q={query}
router.get('/search', async (req: Request, res: Response) => {
    try {
        const query = req.query.q as string;
        const filteredMovies = await Movie.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { genre: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(filteredMovies);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /movies/:id
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const movieId = req.params.id;
        const movie = await Movie.findById(movieId);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST /movies
router.post('/', isAdmin, async (req: Request, res: Response) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: 'Invalid request' });
    }
});

// PUT /movies/:id
router.put('/:id', isAdmin, async (req: Request, res: Response) => {
    try {
        const movieId = req.params.id;
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, req.body, { new: true });
        if (updatedMovie) {
            res.json(updatedMovie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Invalid request' });
    }
});

// DELETE /movies/:id
router.delete('/:id', isAdmin, async (req: Request, res: Response) => {
    try {
        const movieId = req.params.id;
        const deletedMovie = await Movie.findByIdAndDelete(movieId);
        if (deletedMovie) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Invalid request' });
    }
});

export default router;

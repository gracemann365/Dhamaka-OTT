import request from 'supertest';
import express from 'express';
import Movie from '../src/models/Movie';
import  app from '../src/server';


describe('Movie API', () => {
    // POST /movies (Create)
it('should create a new movie', async () => {
    const newMovie = {
        title: 'Test Movie',
        genre: 'Test',
        rating: 5, // Add rating
        streamingLink: 'http://example.com' // Add streaming link
    };
    const res = await request(app)
        .post('/movies')
        .send(newMovie);
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual(newMovie.title);
    expect(res.body.rating).toEqual(newMovie.rating);
    expect(res.body.streamingLink).toEqual(newMovie.streamingLink);
});

    // GET /movies (Read - All)
    it('should get all movies', async () => {
        const res = await request(app).get('/movies');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

   // GET /movies/:id (Read - One)
it('should get a movie by id', async () => {
    const movie = new Movie({ 
        title: 'Test Movie', 
        genre: 'Test',
        rating: 5 // Add rating here
        // Include other required fields here
    });
    await movie.save();
    const res = await request(app).get(`/movies/${movie.id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual(movie.title);
});

// GET /search?q={query} (Read - Search)
it('should return 404 if no movies match the search query', async () => {
    // Create and save a movie with the title 'Dhoom' and genre 'Action'
    const movie = new Movie({ title: 'Dhoom', genre: 'Action', rating: 5 });
    await movie.save();
    // Search for a non-existing movie
    const res = await request(app).get('/search?q=NonExistingMovie');
    expect(res.statusCode).toEqual(404);
});

   
// PUT /movies/:id (Update)
it('should update a movie', async () => {
    const movie = new Movie({ 
        title: 'Test Movie', 
        genre: 'Test',
        rating: 5 // Add rating here
        // Include other required fields here
    });
    await movie.save();
    const res = await request(app)
        .put(`/movies/${movie.id}`)
        .send({ title: 'Updated Test Movie', genre: 'Test', rating: 5 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Updated Test Movie');
});

   // DELETE /movies/:id (Delete)
it('should delete a movie', async () => {
    const movie = new Movie({ 
        title: 'Test Movie', 
        genre: 'Test',
        rating: 5 // Add rating here
        // Include other required fields here
    });
    await movie.save();
    const res = await request(app).delete(`/movies/${movie.id}`);
    expect(res.statusCode).toEqual(204);
});

});



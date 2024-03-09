# Dhamaka Movie Lobby 

Welcome to the Dhamaka Movie Lobby! This is a comprehensive movie management application built on Express.js and MongoDB Atlas. Dhamaka Movie Lobby allows users to perform various actions related to movies, such as adding, retrieving, updating, and removing movies. This README provides detailed documentation on how to set up and use the application, including architecture overview, endpoints, and setup instructions.

### Architecture Overview

The Dhamaka Movie Lobby application follows a client-server architecture, where the server is responsible for handling requests from clients and interacting with the database. Here's an overview of the key components:

1. **Express.js Server**: The backend server built using Express.js handles incoming HTTP requests and routes them to appropriate handlers. It interacts with MongoDB Atlas to perform CRUD operations on movie data.

2. **MongoDB Atlas**: The cloud-hosted MongoDB database stores movie information. It provides scalability, flexibility, and high availability for our application's data storage needs.

3. **Client (not included)**: The client-side application, which could be a web or mobile application, interacts with the backend server through HTTP requests. The client can perform actions like adding, retrieving, updating, and removing movies using the provided endpoints.

### Endpoints

The Dhamaka Movie Lobby provides the following RESTful endpoints for managing movies:

1. **GET /movies**: Retrieves all movies stored in the database.
2. **GET /movies/:id**: Retrieves a specific movie by its unique ID.
3. **GET /movies/search?q={query}**: Searches for movies based on the provided query string (title or genre).
4. **POST /movies**: Adds a new movie to the database. Requires admin privileges.
5. **PUT /movies/:id**: Updates an existing movie with the provided ID. Requires admin privileges.
6. **DELETE /movies/:id**: Removes a movie from the database by its ID. Requires admin privileges.

### Setup Instructions

Follow these steps to set up and run the Dhamaka Movie Lobby application on your local machine:

1. **Clone the Repository**: Clone the Dhamaka Movie Lobby repository from GitHub to your local machine.

2. **Install Dependencies**: Navigate to the root directory of the project and run `npm install` to install all required dependencies.

3. **Set Up MongoDB Atlas**: Create a MongoDB Atlas account if you don't have one already. Set up a new cluster and obtain the connection URI.

4. **Configure MongoDB Connection**: Replace the placeholder values `<username>`, `<password>`, `<dbname>`, and `<appname>` in the `server.ts` file with your MongoDB Atlas credentials and database information.

5. **Start the Server**: Run `npm start` to start the Express.js server. The server will start listening on port 3005 by default.

6. **Run Helper Functions**: From the root directory of the project, run the helper function script by executing `. .\src\scripts\movieFunctions.ps1` in PowerShell. This script provides PowerShell functions to interact with the server endpoints.

7. **Interact with Endpoints**: Use the provided PowerShell functions (e.g., `Add-Movie`, `Get-Movies`, `Get-Movie`, etc.) to interact with the endpoints and perform various actions on movies.

Sure, here's the updated section for testing and installing dependencies:

### Setup Instructions

Follow these steps to set up and run the Dhamaka Movie Lobby application on your local machine:

1. **Clone the Repository**: Clone the Dhamaka Movie Lobby repository from GitHub to your local machine.

2. **Install Dependencies**: Navigate to the root directory of the project and run `npm install` to install all required dependencies.

3. **Set Up MongoDB Atlas**: Create a MongoDB Atlas account if you don't have one already. Set up a new cluster and obtain the connection URI.

4. **Configure MongoDB Connection**: Replace the placeholder values `<username>`, `<password>`, `<dbname>`, and `<appname>` in the `server.ts` file with your MongoDB Atlas credentials and database information.

5. **Start the Server**: Run `npm start` to start the Express.js server. The server will start listening on port 3005 by default.

6. **Run Helper Functions**: From the root directory of the project, run the helper function script by executing `. .\src\scripts\movieFunctions.ps1` in PowerShell. This script provides PowerShell functions to interact with the server endpoints.

7. **Run Tests**: Ensure that all endpoints are working correctly by running `npm test`. This command will execute the test suite and verify the functionality of the application.

8. **Interact with Endpoints**: Use the provided PowerShell functions (e.g., `Add-Movie`, `Get-Movies`, `Get-Movie`, etc.) to interact with the endpoints and perform various actions on movies.

### Usage Examples

Here are some usage examples demonstrating how to use the PowerShell functions to interact with the Dhamaka Movie Lobby endpoints:

```powershell
# Add a new movie
Add-Movie -Title "Inception" -Genre "Sci-fi" -Rating 8.0 -StreamingLink "https://youtu.be/zSWdZVtXT7E?si=X4s_hU4_Bfhvewvo"

# Retrieve all movies
Get-Movies

# Retrieve a specific movie by ID
Get-Movie -Id "65eba1b7017e7e520bcd2bae"

# Search for movies by query
Search-Movies -Query "thriller"

# Update an existing movie
Update-Movie -Id "65ebb7f0d9ff6cac9a8a2d41" -Title "Update Movie" -Genre "Updated" -Rating 1.0 -StreamingLink "https://youtu.be/zSWdZVtXT7E?si=X4s_hU4_Bfhvewvo"

# Remove a movie by ID
Remove-Movie -Id "65ebb7f0d9ff6cac9a8a2d41"
```

### Conclusion

The Dhamaka Movie Lobby provides a convenient and efficient way to manage movies through a simple yet powerful RESTful API. With features like adding, retrieving, updating, and removing movies, it offers flexibility and ease of use for movie management tasks. Feel free to explore and extend the application according to your requirements!

Enjoy using the Dhamaka Movie Lobby! If you have any questions or feedback, please don't hesitate to reach out to the project maintainers.

**Happy movie managing!**

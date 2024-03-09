# FROM THE ROOT DIRECTORY ( dhamaka ) START THE HELPER FUNCTION SCRIPT BY RUNNIG  < . .\src\scripts\movieFunctions.ps1 >  

# Examples of how to use the functions for each end point✅

# 1. Add a new movie to the lobby✅
# Add-Movie -Title "Inception" -Genre "Sci-fi" -Rating 8.0 -StreamingLink "https://youtu.be/zSWdZVtXT7E?si=X4s_hU4_Bfhvewvo"

# 2. List all the movies in the lobby✅
# Get-Movies
#ps -aux | grep 'node index.js', then kill -9 PID
# 3. Retrieve a specific movie by ID ✅
# Get-Movie -Id "65eba1b7017e7e520bcd2bae"

# 4. Search Move by Query ( title or genere ) ✅
# Search-Movies -Query "thriller"

# 5.Update an existing movie ✅
# Update-Movie -Id "65ebb7f0d9ff6cac9a8a2d41" -Title "Update Movie" -Genre "Updated" -Rating 1.0 -StreamingLink "https://youtu.be/zSWdZVtXT7E?si=X4s_hU4_Bfhvewvo"

# 6.Remove a movie by ID ✅
# Remove-Movie -Id "65ebb7f0d9ff6cac9a8a2d41"


# Function to add a new movie
function Add-Movie {
    param(
        [string]$Title,           # Title of the movie
        [string]$Genre,           # Genre of the movie
        [decimal]$Rating,         # Rating of the movie
        [string]$StreamingLink    # Streaming link of the movie
    )

    # Construct the JSON body for the request
    $Body = @{
        title = $Title
        genre = $Genre
        rating = $Rating
        streamingLink = $StreamingLink
    } | ConvertTo-Json

    # Invoke the REST API to add the movie
    Invoke-RestMethod -Method Post -Uri "http://localhost:3005/movies" -Body $Body -ContentType "application/json"
}

# Function to retrieve all movies
function Get-Movies {
    # Invoke the REST API to get all movies
    $movies = Invoke-RestMethod -Method Get -Uri "http://localhost:3005/movies"

    # Display movies in a formatted table
    $movies | Format-Table -Property title, genre, rating, streamingLink, _id
}

# Function to retrieve a specific movie by ID
function Get-Movie {
    param(
        [Parameter(Mandatory = $true)]  # ID of the movie to retrieve
        [string]$Id    
    )

    # Invoke the REST API to get the movie by ID
    $movie = Invoke-RestMethod -Method Get -Uri "http://localhost:3005/movies/$Id"

    # Display the movie details in a table format
    $movie | Format-Table -Property '_id', 'title', 'genre', 'rating', 'streamingLink', '__v' -AutoSize
}

# Function to search movies by query
function Search-Movies {
    param(
        [string]$Query    # Query string to search for movies
    )

    try {
        # Construct the URI with the query parameter
        $Uri = "http://localhost:3005/movies/search?q=$Query"

        # Invoke the REST API to search for movies
        $filteredMovies = Invoke-RestMethod -Method Get -Uri $Uri

        # Output the filtered movies
        # Display movies in a formatted table
        $filteredMovies | Format-Table -Property title, genre, rating, streamingLink, _id
        
    } catch {
        # Handle any errors
        Write-Error "Internal server error: $_"
    }
    
}

# Function to update an existing movie
function Update-Movie {
    param(
        [string]$Id,               # ID of the movie to update
        [string]$Title,            # Updated title of the movie
        [string]$Genre,            # Updated genre of the movie
        [decimal]$Rating,          # Updated rating of the movie
        [string]$StreamingLink     # Updated streaming link of the movie
    )

    # Construct the JSON body for the request
    $Body = @{
        title = $Title
        genre = $Genre
        rating = $Rating
        streamingLink = $StreamingLink
    } | ConvertTo-Json

    # Invoke the REST API to update the movie
    Invoke-RestMethod -Method Put -Uri "http://localhost:3005/movies/$Id" -Body $Body -ContentType "application/json"
}

# Function to remove a movie by ID
function Remove-Movie {
    param(
        [string]$Id    # ID of the movie to remove
    )

    # Invoke the REST API to remove the movie by ID
    Invoke-RestMethod -Method Delete -Uri "http://localhost:3005/movies/$Id"
}


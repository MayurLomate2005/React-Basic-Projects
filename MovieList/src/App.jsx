import React from "react";
import "./index.css"; // Make sure CSS is imported

const MOVIES = [
  { id: 1, title: "Inception", year: 2010, genre: "Action", rating: 8.8 },
  { id: 2, title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6 },
  { id: 3, title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
  { id: 4, title: "Parasite", year: 2019, genre: "Drama", rating: 8.6 },
  { id: 5, title: "Coco", year: 2017, genre: "Animation", rating: 8.4 },
  { id: 6, title: "Inside Out", year: 2015, genre: "Animation", rating: 8.2 },
];

// Search Bar
function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Enter movie name..."
      className="movie-search"
    />
  );
}

// Movie List
function MovieList({ movies }) {
  return (
    <table className="movie-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.genre}</td>
            <td>{movie.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Main App
export default function App() {
  return (
    <div className="app-container">
      <h1>🎬 Movie List</h1>
      <SearchBar />
      <MovieList movies={MOVIES} />
    </div>
  );
}

import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      {movies.length === 0 ? (
        <p>No movies available. Please add some!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Release Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MovieList;

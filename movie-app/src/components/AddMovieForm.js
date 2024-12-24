import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const AddMovieForm = () => {
  const { addMovie } = useContext(MovieContext);

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genre && year) {
      addMovie({ title, genre, year });
      setTitle("");
      setGenre("");
      setYear("");
    }
  };

  return (
    <div className="add-movie-form">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Release Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovieForm;

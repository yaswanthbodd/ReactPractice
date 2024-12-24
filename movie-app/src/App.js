import React from "react";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";

const App = () => {
  return (
    <div className="App">
      <h1>Movie Management</h1>
      <AddMovieForm />
      <MovieList />
    </div>
  );
};

export default App;

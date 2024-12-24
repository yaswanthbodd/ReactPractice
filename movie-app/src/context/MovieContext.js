import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    
  ]);

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, { id: Date.now(), ...newMovie }]);
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;

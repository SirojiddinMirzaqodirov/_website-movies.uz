import React from "react";
import "./Movie-list.css";
import MovieListItem from "../Movie-list-item/Movie-list-item";

const MovieList = () => {
    return (
        <div className="movie-list">
           <MovieListItem />
           <MovieListItem />
           <MovieListItem />
           <MovieListItem />
        </div>
    )
}

export default MovieList
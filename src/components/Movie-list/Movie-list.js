import React from "react";
import "./Movie-list.css";
import MovieListItem from "../Movie-list-item/Movie-list-item";

const MovieList = () => {
    return (
        <div className="movie-list">
           <MovieListItem name="Avengers-1" viewers="1001"/>
           <MovieListItem name="Avengers-2" viewers="980"/>
           <MovieListItem name="Avengers-3" viewers="1501"/>
           <MovieListItem name="Avengers-4" viewers="2002"/>
        </div>
    )
}

export default MovieList
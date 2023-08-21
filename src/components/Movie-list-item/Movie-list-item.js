import React from "react";
import "./Movie-list-item.css";


const MovieListItem = ({name, viewers}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">{name}</span>
            <input type="number" className="list-group-item-input" defaultValue={viewers} />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-heart btn-sm">
                    <i className="fa-regular fa-heart"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default MovieListItem
import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                id,
                year,
                title,
                summary,
                poster,
                genres
            }
         } }>
            <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <div className="movie__data">
                    <h3 className="movie__title" >{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">{genres.map((genre, index) => {
                        return <li className="movie__genre" key={ index }>{ genre }</li>
                    })}</ul>
                    {/* <h5 className="movie__genres">{genres.map(genre => {
                        return genre + " ";
                    }) }</h5> */}
                    <p className="movie__summary">{summary.slice(0,180)}...</p>
                    {/* 텍스트를 어레이로 분할한다. */}
                </div>
            </div>
        </Link>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie
import React from 'react';
import "./Detail.css";

class Detail extends React.Component {

    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail__movie">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                <div className="detail__movie__data">
                    <h3 className="detail__movie__title" >{location.state.title}</h3>
                    <h5 className="detail__movie__year">{location.state.year}</h5>
                    <ul className="detail__movie__genres">{location.state.genres.map((genre, index) => {
                        return <li className="detail__movie__genre" key={ index }>{ genre }</li>
                    })}</ul>
                    {/* <h5 className="movie__genres">{genres.map(genre => {
                        return genre + " ";
                    }) }</h5> */}
                    <p className="detail__movie__summary">{location.state.summary}</p>
                    {/* 텍스트를 어레이로 분할한다. */}
                </div>
            </div>
            );
        } else {
            return null;
        }
     }
}



export default Detail;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {ButtonBackToHome} from '../components/ButtonBackToHome'
import './DetailStyle.css'

const API_KEY = '6140f1ea'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie ({ id }) {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            console.log({ movie })
            this.setState({ movie })
        })
    }

    _goBack() {
        window.history.back()
    }

    componentDidMount () {
        console.log(this.props)
        const { movieId } = this.props.match.params
        this._fetchMovie({ id: movieId })
    }
    
    render() {
        const { Title, Poster, Plot, Actors, Year, Director, Awards, Genre, imdbRating } = this.state.movie
        return (
            <div>
                <div>
                    <img className= "poster" src={Poster} alt={Title}/>
                    <div className= "textDetail">
                        <h1 className="titleMovie"><b>{Title} </b>({Year})</h1>
                        <p className="plot"><b>Plot: </b>{Plot}</p>
                        <h3><b>Actors: </b> {Actors}</h3>
                        <h3><b>Director: </b> {Director}</h3>
                        <h3><b>Awards: </b> {Awards}</h3>
                        <h3 className="genre"><b>Genre: </b> {Genre}</h3>   
                        <h3 className="imdbRating"><b>ImdbRating:</b> {imdbRating}<img className="starImage" src="http://pluspng.com/img-png/star-hd-png-star-png-image-yildiz-png-3580.png" alt="Star HD PNG"/></h3>
                        
                        <ButtonBackToHome />
                    </div>
                </div>
            </div>
        )
    }
}
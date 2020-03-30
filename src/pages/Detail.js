import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {ButtonBackToHome} from '../components/ButtonBackToHome'

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
        const { Title, Poster, Actors, Year, Plot } = this.state.movie
        return (
            <div>
            <ButtonBackToHome />
            <h1>{Title}</h1>
            <img src={Poster} alt={Title}/>
            <h3>Actors: {Actors}</h3>
            <span>Year: {Year}</span>
            <p>Plot: {Plot}</p>
            </div>
        )
    }
}
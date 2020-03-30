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
        const { Title, Poster, Actors, Year, Plot } = this.state.movie
        return (
            <div>
                <ButtonBackToHome />    
                <div>
                    <img className= "poster" src={Poster} alt={Title}/>
                    <div className= "textDetail">
                        <h1 className="titleMovie"><b>{Title} </b>({Year})</h1>
                        <h3 className="actors"><b>Actors: </b> {Actors}</h3>
                        <p className="plot"><b>Plot: </b>{Plot}</p>
                    </div>
                </div>
            </div>
        )
    }
}
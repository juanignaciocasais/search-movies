import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = '6140f1ea'

export class Detail extends Component {
    static propTypes= {
        id: PropTypes.string
    }

    _fetchMovie ({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${ id }`)
        .then(res => res.json())
        .then(movie => {
            console.log({ movie })
        })
    }

    componentDidMount () {
        const { id } = this.props
        this._fetchMovie({ id })
    }
    
    render() {
        return (
            <p>Página de detalle</p>
        );
    }
}
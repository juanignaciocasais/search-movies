import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

export class Movie extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }
    
    render(){
        const { id, title, year, poster } = this.props

        return (
            <Link to={`${process.env.PUBLIC_URL}/detail/${id}`} className="card">
                <div className="card-image">
                    <figure >
                    <img className="image"
                        alt={title}
                        src={poster}
                    />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}


import React from 'react'
import {Link} from 'react-router-dom'

export const ButtonBackToHome = () => (
    <Link className='button is-info'
        to={process.env.PUBLIC_URL + '/'}>
            Return
        </Link>
)
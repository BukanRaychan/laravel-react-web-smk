import React from 'react'
import { Link } from 'react-router-dom'

function LargeScreenNavLink({title, endpoint}) {
    return (
        // <Link spy={true} smooth={true} to="/">
        //   <li className='hover:text-tertiary transition hover:border-b-2 hover:border-tertiary cursor-pointer'>Home</li>
        // </Link>
        <li className='inline-block hover:text-tertiary transition border-b-2 border-white hover:border-tertiary cursor-pointer'>
            <Link to={endpoint}>
                {title}
            </Link>
        </li>
    )
}

export default LargeScreenNavLink
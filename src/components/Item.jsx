import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({title,to}) {
    return (
        <li>
            <Link to={to}>{title}</Link>
        </li>
    )
}

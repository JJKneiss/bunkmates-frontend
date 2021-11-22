import React from 'react';

import { Link } from 'react-router-dom';
const ListingItem = (props, children) => {
    return (
        <article>
            <h2>
                <Link to="/listings/:id">Single Listing</Link>
            </h2>
            <ul>
                <li>
                    Beds: <span>number</span>
                </li>
                <li>
                    Baths: <span>number</span>
                </li>
                <li>
                    <p>Lease Status: <span>Open</span></p>
                </li>
            </ul>
        </article>
    );
}

export default ListingItem;
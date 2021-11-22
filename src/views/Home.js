import React from 'react';
import { Link } from 'react-router-dom';

import ListingItem
    from '../components/ListingItem';
export default function Home() {
    return (
        <div className="App">
            <section>
                <h1 className="">Listings</h1>
                <Link to="/listings/new" className="new">New Listing</Link>
            </section>
        </div >
    );
}
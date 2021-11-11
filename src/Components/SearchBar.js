import React from 'react';

function SearchBar({placeholder, data}) {
    return (
        <div className="search">
            <div className="searchInputs">
            <input type="text" placeholder={placeholder} />
            <div>
            </div>
            <div> </div>
            </div>
           
        </div>
    )
}


export default SearchBar
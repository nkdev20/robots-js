import React from 'react';

const SearchBox = (props) => {
    return (
        <div className = "">
            <input 
                className ="pa2 ba b--green bg-lightest-blue" 
                type='search' 
                placeholder = 'Search robots' 
                onChange = {props.searchChange}
            />
        </div>
    )
};

export default SearchBox;
import React from 'react';

const SearchBox = ({searchChange}) => {

    return(
      <div>
            <h1> Hello world from search SearchBox</h1>
            <input 
             type='search' 
             placeholder='Search for your champion here...'  
             onChange={searchChange}
             />
      </div>
    )
}

export default SearchBox;
import React from 'react';

const SearchBox = ({searchChange}) => {

    return(
      <div>
            <input 
             type='search' 
             placeholder='Search for your champion here...'  
             onChange={searchChange}
             />
      </div>
    )
}

export default SearchBox;
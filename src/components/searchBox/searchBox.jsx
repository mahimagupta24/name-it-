import React from 'react';
import'./searchBox.css'

const SearchBox = ({onInputChange})=>{
    return(
        <div className='search-container'>
            <input onChange={(event)=>onInputChange(event.target.value)}
            placeholder="type here"className='search-input'></input>

        </div>
    )

}

export default SearchBox
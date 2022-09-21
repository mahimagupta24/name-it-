import React from 'react';
import './NameCard.css';
const nameCheapUrl="https://www.namecheap.com/domains/registration/results/?domain=%27%3B"
const NameCard=({suggestedNames})=>{
   return(
    <a className="class-link"target="blank"rel="noreferrer"href={`${nameCheapUrl}${suggestedNames}`}>
    <div className="name-card">
<p className="result-name">{suggestedNames}</p>
    </div>
    </a>
   ) 
}
export default NameCard;
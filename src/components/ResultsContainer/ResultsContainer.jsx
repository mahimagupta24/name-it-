import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css'
const ResultsContainer=({suggestedName})=>{
 const suggestedNamesJsx=suggestedName.map(suggestedNames=>{
    return<NameCard key={suggestedNames}suggestedNames={suggestedNames}/>
  })
  return ( 
  <div className="results-container">
{suggestedNamesJsx}
    </div>
  )
}
export default ResultsContainer;
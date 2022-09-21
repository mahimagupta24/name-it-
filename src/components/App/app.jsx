import React from 'react';
import './app.css';
import Header from '../header/header';
import SearchBox from '../searchBox/searchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
const name=require('@rstacruz/startup-name-generator')

class App extends React.Component{
    constructor(){
        super();
    this.state=({
        headerText:"Name It",
         headerExpanded:true,
         suggestedName:[]
    })
}
 handleInputChange=(inputText)=>{
    //  alert("i am called")
  this.setState({headerExpanded:!inputText,
    suggestedName:name(inputText),})
//  console.log(inputText)
}
render(){
    // console.log(name('cloud'))
    return(
    <div>
        <Header  headerExpanded={this.state.headerExpanded}headTitle={this.state.headerText} />
        <SearchBox onInputChange={this.handleInputChange}/>
        <ResultsContainer suggestedName={this.state.suggestedName}/>
    </div>
    )
}
}
export default App;

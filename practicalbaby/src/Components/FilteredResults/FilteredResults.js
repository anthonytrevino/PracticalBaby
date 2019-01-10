import React,{Component} from 'react';
import '../FilteredResults/Filteredresults.css';



class FilteredResults extends Component {

  render(){
    
    return (
      <div id="FilteredResultsPage">
        <div>
          <ul id="filteredresultsul">
            <li className="resultitem">result1</li>

          </ul>
        </div>
      </div>
    )
  }
}

export default FilteredResults;

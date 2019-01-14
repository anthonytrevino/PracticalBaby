import React,{Component} from 'react';
import '../FilteredResults/Filteredresults.css';
import CarSeatQuestions from '../Questionnaire/CarSeatQuestions/CarSeatQuestions.js';


class FilteredResults extends Component {

  render(){

    return (
      <div id="FilteredResultsPage">
        <div>
          <ul id="filteredresultsul">
            <li className="resultitem"><a href={'https://www.amazon.com/Graco-Extend2Fit-Convertible-Seat-Gotham/dp/B019EGMGR0/ref=sr_1_1_s_it?s=baby-products&ie=UTF8&qid=1547483923&sr=1-1&refinements=p_72%3A1248867011'} >Graco Extend2Fit Convertible Car Seat, Gotham
by Graco
4.6 out of 5 stars    2,696 customer reviews  | 995 answered questions
#1 Best Sellerin Convertible Child Safety Car Seats </a>
            </li>

            <li className="resultitem"><a href={'https://www.amazon.com/Graco-4Ever-Convertible-Seat-Matrix/dp/B00Y2863GQ/ref=sr_1_5_s_it?s=baby-products&ie=UTF8&qid=1547483923&sr=1-5&refinements=p_72%3A1248867011'} >Graco 4Ever 4-in-1 Convertible Car Seat, Matrix
by Graco
4.7 out of 5 stars    2,483 customer reviews  | 1000+ answered questions </a>
            </li>

          </ul>
          <CarSeatQuestions />
        </div>
      </div>
    )
  }
}

export default FilteredResults;

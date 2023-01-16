import React from 'react'
import './details.css';
import data from './data.png';
import data1 from './data1.png';
import Donate from './donate';
function Details() {
  return (
    <div class="o-data">
        <div className="itemdetails">
        <h1>ORPHANS</h1>
        <p>An estimated 153 million children worldwide are orphans (UNICEF).</p>
        </div>
        <div className="data">
            <img src={data} alt=""/>
        </div>
           <h1>CHILD LABOUR</h1>
           
           <li>Worldwide, there are 168 million child laborers, accounting for almost 11% of children (ILO).</li>
           <li>In the world's poorest countries, around 1 in 4 children are engaged in child labor (UNICEF).</li>    

           <h1>EDUCATION</h1>
           
           <li>263 million children and youth are out of school (UNESCO).</li>
           <li>An estimated 61 million primary-school-age children are out of school; 53% of them are girls (UNICEF).</li>
            <div className="health">
           <h1>HEALTH</h1>
           
           <li>There are 69 million children worldwide who suffer from malnutrition (World Bank)</li>
           <li>In 2017, 75% of malnourished children lived in less developed regions (WHO).</li>
           <li>Nearly half of all deaths in children under the age of 5 can be attributed to undernutrition, <br/>
           resulting in the unnecessary loss of about 3 million young lives a year (UNICEF).</li>
           <li>66 million primary-school-age children attend classes hungry across the developing world, with 23 million in Africa alone (WHO).​</li>
           <img src={data1} alt=""/>
           </div>
           <Donate/>
    </div>
    
  )
  
}

export default Details
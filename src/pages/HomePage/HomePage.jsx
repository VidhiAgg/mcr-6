import React, { useState } from 'react'
import "./HomePage.css"
import { cuisineData } from '../../data/Data'
import DisplayResturants from '../../components/DisplayResturant/DisplayResturants';

const HomePage = () => {
  const [showResturant, setShowResturants] = useState(false);
 const[cusineID, setCusineID] = useState();
  const handleButtonClick =(e, id)=>{
    e.stopPropagation();
    setShowResturants(true);
    setCusineID(id);
  };
  
  return (
    <div className='home-page-container'>
        <div className="header">
            <h2>Food Ordering App</h2>
        </div>

        <div className="sub-header">
            <h3>Select Your Cuisine: </h3>
        </div>

        <div className="cusine-list">
          {
            cuisineData.map(cusine => (
              <div className="cusine" key={cusine.id}>
<button onClick={(e)=>handleButtonClick(e,cusine.id)}>{cusine.name}
</button>
              </div>
            ))
          }
        </div>
{showResturant && cusineID &&  <div className="resturantCrd">
          <DisplayResturants cusineID={cusineID}/>
</div>}

    </div>
  )
}

export default HomePage
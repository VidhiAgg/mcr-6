import React, { useContext } from 'react'
import { FoodContext } from '../../context/FoodContext'
import "./Resturant.css"
import { useNavigate } from 'react-router-dom';

const DisplayResturants = ({cusineID}) => {
const {resturants} = useContext(FoodContext);

const getResturants = resturants?.filter(resturant => resturant.cuisine_id === parseInt(cusineID))

const navigate  = useNavigate();
  return (
    <>
    {
      getResturants?.map(resturant => {
        return <div className="resturant-card" key={resturant.id} onClick={(e)=> {e.stopPropagation(); navigate(`resturant/${resturant.id}`) }}>
         
          <div className="header-menu">
            <h2>Dises By {resturant.name}</h2>
          </div>
<div className="menu-list">
{
resturant.menu.map(item => {
  return <div className="resturant-item" onClick={(e)=> {e.stopPropagation(); navigate(`resturant/${resturant.id}`) }}>

          <div className="img">
            <img src={item.imgSrc} alt={item.name}/>
          </div>
          <div className="content">
            <h2>{item.name}</h2>
            <p>Rs. {item.price} for {item.qty}</p>
            <p>{resturant.name}</p>
          </div>

          </div>
})
          }
          
</div>
          
        </div>
      })
    }
    </>
   
  )
}

export default DisplayResturants
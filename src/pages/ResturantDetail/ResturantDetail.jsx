import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Resturant.css"
import { ArrowBackIosNew } from '@mui/icons-material';
import { FoodContext } from '../../context/FoodContext';
const ResturantDetail = () => {
  const {id} = useParams();
  const {resturants} = useContext(FoodContext);
  const getResturant = resturants?.filter(data => data.id === parseInt(id));
// const [showAddModal, setAddModal] = useState(false);

  const navigate = useNavigate();

  return (
    <div className='resturant'>
      <div className="resturant-header-card">
      <div className="back-btn" onClick={(e)=> {e.stopPropagation(); navigate(`/`) }}>
  <ArrowBackIosNew />
</div>
<div className="content-rst">
  {
    getResturant?.map(data=> {
      return <div className="header-resturant" key={data.id}>
        <div>
        <div className="resturant-detail">
      <h1>{data.name}</h1>
      <p>{
        data.menu?.map(({name},index)=> 
          index === data.menu?.length ?  <span key={index}>{name}. </span> :
          <span key={index}>{name}, </span>
        )
    }</p>
      <p>
        {data.address}
      </p>
      <p>{data.phone}</p>
      <p>Average Rating : {data.averageRating}</p>

      </div>
      <div className="add-btn">
        <button>Add Review</button>
      </div>
        </div>
     
      <div className="review">
        <h1>Reviews</h1>
       
      
 { data.ratings.map(review => {
    return  <div className="review-car" key = {data.id}>
<div className="review-heaer">
<div className="image">
  <img src={review.pp} alt={review.name} />
</div>
</div>
    </div>
  })}
 
  
  

</div>
      </div>

    })}
    </div>
    </div>

</div>  )
}

export default ResturantDetail
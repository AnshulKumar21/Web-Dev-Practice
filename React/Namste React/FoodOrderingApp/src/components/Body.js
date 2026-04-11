import RestaurantCard from "./Resaurantcard";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
//State variable
const arr = useState(resList)
// const [ListOfRes,setListOfRes] = useState(resList);
//destructuring
// const [ListOfRes,setListOfRes] = arr;
const ListOfRes = arr[0];
const setListOfRes = arr[1];
//Normal var;
  
  return (
    <div className="body">
      <div className="filter">
        <button
        className="filter-btn" onClick={()=>{
         
         const filteredListOfRes = ListOfRes.filter(
          (res) => res.info.avgRating > 3.9
         );
         setListOfRes(filteredListOfRes)
        }}>Top Rated Restaurants</button>
      </div>

      <div className="res-container">
        {
        ListOfRes.map((restaurant) => 
        (<RestaurantCard 
          key={restaurant.info.id}
          resData={restaurant}/>))
          
        }

       
      </div>
    </div>
  );
};
export default Body;
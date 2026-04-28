import RestaurantCard from "./Resaurantcard";
import resList from "../utils/mockdata";
import { use, useState } from "react";
import { useEffect } from "react";
const Body = () => {
//State variable
const arr = useState([])
// const [ListOfRes,setListOfRes] = useState(resList);
//destructuring
// const [ListOfRes,setListOfRes] = arr;
const ListOfRes = arr[0];
const setListOfRes = arr[1];
//Normal var;
useEffect(() => {
  console.log("called");
  fetchData();
}, []);
  const fetchData =async ()=>{
    console.log("fetching")
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
   setListOfRes(
  json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
);
 };
 if(ListOfRes.length===0)
 {
  return<h1>Loading....</h1>

 }
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
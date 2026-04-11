import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData}=props;
  const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo} = resData?.info
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL+resData.info.cloudinaryImageId
          }
      />
      <div className="card-content">

   
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}minutes</h4>
    </div>
    </div>
  );
};
export default RestaurantCard;
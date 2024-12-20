import { CDN_URL } from "../utils/constants";
import React from 'react';

const RestaurantCard = (props) => {
   let {resData}=props

    return (
      <div className="res-card">
        <img alt="res-logo" className="res-logo" src={CDN_URL+resData?.cloudinaryImageId}/>
        <h3>{resData?.name}</h3>
        <h4>{resData?.cuisines.join(", ")}</h4>
        <h4>{resData?.avgRating}</h4>
        <h4>{resData?.sla?.slaString}</h4>
      </div>
    )
  }

  export default RestaurantCard;
import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react";
import React from 'react';

import Shimmer from "./Shimmer"
const Body = () => {
    const [ratingList, setRatingList] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [searchText, setSearchText] = useState("")
    // Declare fetchData correctly
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const data1 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRatingList(data1);
        setFilteredData(data1);
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);
    return (
        ratingList.length === 0 ? <Shimmer /> :
            <div className="body">
                <div className="filter">
                    {/* <input></input> */}
                    <div className="search">
                        <input value={searchText} className="search-box" onChange={(e) => {
                            setSearchText(e.target.value)
                        }}></input>
                        <button onClick={() => {
                            const searchData = ratingList.filter((obj) => obj.info.name.toLowerCase().includes(searchText.toLowerCase()));

                            setFilteredData(searchData);
                            console.log('searchData', searchData)
                        }}>Search</button>
                    </div>
                    <button className="filter-btn" onClick={() => {
                        setFilteredData(ratingList.filter((obj) =>
                            obj.info.avgRating > 4))
                        // console.log(list)
                    }}>Top Rated Restaurant</button>
                </div>
                <div className="res-container">
                    {filteredData?.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />)
                    )}

                </div>
            </div>
    )
}

export default Body
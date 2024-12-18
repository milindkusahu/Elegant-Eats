import { Search } from "./Search";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingSkeleton from "./LoadingSkeleton";
import Button from "./Button";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { API_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const onlineStatus = useOnlineStatus();
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Reset filteredRestaurants to all restaurants when navigating to "/"
    if (location.pathname === "/") {
      setFilteredRestaurants(listOfRestaurants);
    }
  }, [location, listOfRestaurants]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(API_URL);
      const json = await data.json();
      const finalData =
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(finalData);
      setFilteredRestaurants(finalData);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleSearch = (searchText) => {
    if (!searchText) {
      setFilteredRestaurants(listOfRestaurants);
    }

    const filteredRes = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRes);
  };

  const topRestaurants = () => {
    const filteredResturant = listOfRestaurants.filter(
      (res) =>
        res.info &&
        parseFloat(res.info.avgRatingString) >= 3.5 &&
        parseFloat(res.info.avgRatingString) < 4.2
    );
    setFilteredRestaurants(filteredResturant);
  };

  if (!onlineStatus) {
    return (
      <div className="offline-container">
        <div className="offline-content">
          <div className="offline-icon">⚠️</div>
          <h2>You&apos;re Offline</h2>
          <p>Please check your internet connection and try again</p>
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <Search handleSearch={handleSearch} />
      <Button topRestaurants={topRestaurants} text="Top Restaurants" />

      <div className="card-container">
        {loading
          ? Array(20)
              .fill(null)
              .map((_, index) => <LoadingSkeleton key={index} />)
          : filteredRestaurants.map((resData, index) => (
              <Link key={index} to={`/restaurant/${resData.info.id}`}>
                <RestaurantCards resData={resData} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;

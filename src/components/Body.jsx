import { Search } from "./Search";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import Button from "./Button";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch("https://dummyjson.com/recipes");
      const json = await data.json();
      setListOfRestaurants(json.recipes);
      setFilteredRestaurants(json.recipes);
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
      res?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRes);
  };

  const topRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.prepTimeMinutes < 15
    );
    setFilteredRestaurants(filteredList);
  };

  return (
    <div className="body">
      <Search handleSearch={handleSearch} />
      <Button topRestaurants={topRestaurants} text="Top Restaurants" />

      <div className="card-container">
        {loading
          ? Array(8)
              .fill(null)
              .map((_, index) => <LoadingSkeleton key={index} />)
          : filteredRestaurants.map((restaurant, index) => (
              <RestaurantCards key={index} restaurant={restaurant} />
            ))}
      </div>
    </div>
  );
};

export default Body;

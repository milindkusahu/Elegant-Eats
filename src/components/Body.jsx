import { Search } from "./Search";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import Button from "./Button";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    setListOfRestaurants(json.recipes);
    setFilteredRestaurants(json.recipes);
  };

  const handleSearch = (searchText) => {
    if (!searchText) {
      setFilteredRestaurants(listOfRestaurants);
    }

    const filteredRes = listOfRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
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

      <button className="btn" onClick={() => {}}>
        Top Restaurants
      </button>

      <div className="card-container">
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCards key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

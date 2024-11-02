import React, { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch();
  };

  return <div>RestaurantMenu</div>;
};

export default RestaurantMenu;

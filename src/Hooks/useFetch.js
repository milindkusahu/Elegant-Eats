import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const useFetch = () => {
  const [resData, setResData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      const finalData = json.recipes;
      setResData(finalData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resData;
};

export default useFetch;

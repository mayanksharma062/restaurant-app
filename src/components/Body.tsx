import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body: React.FC = () => {
  const [restaurantList, setRestaurantList] = useState<any[]>([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState<any[]>(
    []
  );
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setRestaurantList(data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(data?.data?.cards[2]?.data?.data?.cards);
  };

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event?.target as HTMLInputElement).value;
    setSearchText(value);
    const filteredRestaurantList = restaurantList.filter((restaurant) => {
      return restaurant.data.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredRestaurantList(filteredRestaurantList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>Looks Like You're Offline, Please Check Your Internet Connection!</h1>
    );

  if (restaurantList.length == 0) {
    return <div>Loading .....</div>;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="search"
          onChange={(event) => search(event)}
        />
        <button onClick={() => setSearchText("")}>Clear</button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((res: (typeof restaurantList)[0]) => (
          <Link to={"restaurants/" + res.data.id} key={res.data.id}>
            <RestaurantCard
              name={res.data.name}
              cuisines={res.data.cuisines}
              ratings={res.data.avgRating}
              deliveryTime={res.data.slaString}
              image={res.data.cloudinaryImageId}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

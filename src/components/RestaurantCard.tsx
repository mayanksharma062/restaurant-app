interface RestaurantData {
  name: string;
  cuisines: string[];
  ratings: string;
  deliveryTime: string;
  image: string;
}

const RestaurantCard: React.FC<RestaurantData> = ({
  name,
  cuisines,
  ratings,
  deliveryTime,
  image,
}) => {
  return (
    <div className="p-4 m-4 w-[340px] rounded-lg bg-pink-100 hover:bg-pink-300">
      <img
        className="rounded-lg"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          image
        }
        alt="image-of-the-rominos-burger"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.slice(0, 3).join(", ")}</h4>
      <h4>Rating: {ratings}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

interface RestaurantData {
  name: string;
  cuisines: string[];
  costForTwoMessage: string;
  cloudinaryImageId: string;
}

const RestaurantMenu: React.FC = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) {
    return <div>Loading .....</div>;
  }

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
  }: RestaurantData = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((item: any) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

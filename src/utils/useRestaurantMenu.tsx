import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/contants";

const useRestaurantMenu: any = (resId: any) => {
  const [resInfo, setResInfo] = useState<any>(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;

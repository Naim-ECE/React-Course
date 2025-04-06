import { useState } from "react";
import Items from "./Items";

const FoodItems = ({ khabars }) => {
  // let healthyFood = ["Rice", "Egg", "Beef", "Chicken", "Potato", "Kacchi"];

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };

  return (
    <>
      <ul className="list-group">
        {khabars.map((item) => (
          <Items
            key={item}
            khabar={item}
            bought={activeItems.includes(item)}
            handle={() => onBuyButton(item)}
          />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;

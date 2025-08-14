import { useContext } from "react";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ props }) {
  const cartCtx = useContext(CartContext);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${props.image}`} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(props.price)}
          </p>
          <p className="meal-item-description">{props.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => cartCtx.addItem(props)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

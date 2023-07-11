import React, { useState } from "react";

function Item({ name, category }) {
    const [isInCart, SetIsInCart] = useState(false)

    const handleCartToggle = () => {
      SetIsInCart(!isInCart)
    }
    return (
      <li className={isInCart ? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button onClick={handleCartToggle}>
          {isInCart ? "Remove From Cart" : "Add to Cart"}
        </button>
      </li>
    );
  }
  
  export default Item;
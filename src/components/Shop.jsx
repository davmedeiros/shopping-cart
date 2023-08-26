import { useState } from 'react';
import ShowCase from './ShowCase';

const Shop = () => {
  const [itemsOnCart, setItemsOnCart] = useState(0);

  const addToCart = (number = 0) => {
    setItemsOnCart(itemsOnCart + Number(number));
  };

  return (
    <>
      <h2>Shop</h2>
      <div className="cart-info">
        <p>Item in the cart: {itemsOnCart}</p>
        <button type="button" className="open-cart">
          View Items
        </button>
        <ShowCase addToCart={addToCart} numberOfItems={10} />
      </div>
    </>
  );
};

export default Shop;

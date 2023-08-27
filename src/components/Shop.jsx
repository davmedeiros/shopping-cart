import { useState } from 'react';
import ShowCase from './ShowCase';
import '../styles/Shop.css';

const Shop = () => {
  const [itemsOnCart, setItemsOnCart] = useState(0);

  const addToCart = (number = 0) => {
    setItemsOnCart(itemsOnCart + Number(number));
  };

  return (
    <>
      <div className="cart-info">
        <p>Item in the cart: {itemsOnCart}</p>
        <button type="button" className="open-cart">
          View Items
        </button>
      </div>
      <ShowCase addToCart={addToCart} numberOfItems={10} />
    </>
  );
};

export default Shop;

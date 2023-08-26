import { useState } from 'react';
import ShowCase from './ShowCase';

const Shop = () => {
  const [numberOfItems, setNumberOfItems] = useState(0);

  return (
    <>
      <h2>Shop</h2>
      <div className="cart-info">
        <p>Item in the cart: {numberOfItems}</p>
        <button type="button" className="open-cart">
          View Items
        </button>
        <ShowCase />
      </div>
    </>
  );
};

export default Shop;

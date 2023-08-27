import '../styles/Item.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FetchItem = (id) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setItem(await response.json());
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getItem();
  }, [id]);

  return { item, error, isLoading };
};

const Item = ({ id, addToCart }) => {
  const { item, error, isLoading } = FetchItem(id);
  const [amount, setAmount] = useState(0);

  if (error) return <p>A network error was encountered</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="item" key={item.id}>
      <div className="image-container">
        <img src={item.image} alt={item.name} className="item-image" />
      </div>
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        <p className="item-price">Price: ${item.price}</p>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            addToCart(Number(amount));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  addToCart: PropTypes.func,
};

export default Item;

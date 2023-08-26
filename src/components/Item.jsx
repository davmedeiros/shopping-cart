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

  if (error) return <p>A network error was encountered</p>;
  if (isLoading) return <p>Loading...</p>;

  console.log(item);

  return (
    <div className="item" key={item.id}>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <button
        type="button"
        onClick={() => {
          addToCart(1);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number,
  addToCart: PropTypes.func,
};

export default Item;

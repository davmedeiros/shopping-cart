import PropTypes from 'prop-types';
import Item from './Item';

const ShowCase = ({ addToCart, numberOfItems = 1 }) => {
  const items = [];

  for (let i = 0; i < numberOfItems; i++) {
    items.push(<Item id={i + 1} addToCart={addToCart} key={i + 1} />);
  }

  return <div className="showcase">{items.map((item) => item)}</div>;
};

ShowCase.propTypes = {
  addToCart: PropTypes.func,
  numberOfItems: PropTypes.number,
};

export default ShowCase;

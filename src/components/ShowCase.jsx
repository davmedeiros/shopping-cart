import PropTypes from 'prop-types';
import Item from './Item';

const ShowCase = ({ addToCart }) => {
  const items = [];

  for (let i = 0; i < 10; i++) {
    items.push(<Item id={i + 1} addToCart={addToCart} />);
  }

  return <div className="showcase">{items.map((item) => item)}</div>;
};

ShowCase.propTypes = {
  addToCart: PropTypes.func,
};

export default ShowCase;

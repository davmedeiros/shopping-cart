import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ className, items }) => {
  return (
    <nav className={className}>
      <menu>
        {items.map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase() === 'home' ? '/' : item.toLowerCase()}
              className="tab"
            >
              <div>{item}</div>
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
};

export default Navigation;

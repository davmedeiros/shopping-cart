import './App.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>hello</h1>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Outlet />
    </>
  );
}

export default App;

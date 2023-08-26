import './App.css';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <header>
        <h1>zhOOpers</h1>
        <Navigation className={'header-nav'} items={['Home', 'Shop']} />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

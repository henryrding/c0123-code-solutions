import './App.css';
import AppDrawer from './AppDrawer';

const menu = {
  menuHeading: 'Menu',
  menuItems: ['About', 'Get Started', 'Sign In', 'Lamberto']
}

function App() {
  return (
    <AppDrawer menuHeading={menu.menuHeading} menuItems={menu.menuItems} />
  );
}

export default App;

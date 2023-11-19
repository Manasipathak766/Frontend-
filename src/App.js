import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route is the root ("/") and render the Login component accordingly
const isRootRoute = location.pathname === '/';

return (
  <div>
    {isRootRoute && <Login />}
    
    <main className='pt-16 bg-black min-h-[calc(100vh)]'>
      <Outlet />
    </main>
  </div>
);
}

export default App;

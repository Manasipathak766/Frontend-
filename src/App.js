import { Outlet } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';



function App() {
  return (
    <div >
   <Login/>
   <main className='pt-16 bg-black min-h-[calc(100vh)]'>
    <Outlet/>
   </main>
    </div>
  );
}

export default App;

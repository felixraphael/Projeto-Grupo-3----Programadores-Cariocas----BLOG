import './App.css';
import { Outlet } from 'react-router-dom';



//Components
import Navbar from './components/Navbar';


function App() {


  return (

    
    <div className="App">
      
      
      <Navbar />
      
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default App

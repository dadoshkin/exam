import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from "./components/Header"
import Home from './components/Home';

function App() {
  return (
    <>
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path='/cart/:id' element={<Cart/>}/>
     </Routes>
    
    </>
  );
}

export default App;

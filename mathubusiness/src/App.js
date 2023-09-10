
import './App.css';
import { Routes,Route,BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Shoppingcart from './pages/Shoppingcart';



function App() {
  return (

 

      <BrowserRouter>

    
<main>
 <Navbar />  


      <Routes> 
   <Route path="home" element={<Home />}/>
      <Route path="navbar" element={<Navbar />}/>

    <Route path="about" element={<About />}/>
    <Route path="contact" element={<Contact /> }/>
    <Route path="shoppingcart" element={<Shoppingcart  /> }/>


</Routes>

 </main>

      </BrowserRouter>

   
        
  )
  }

export default App;


import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Slider from "./components/Slider";



function App() {

  const isLoggedIn = true;


  return ( 
    <>
<Banner/>
<Navbar/>     



<Routes>
  <Route path="/" element= { <Home />} />
  <Route path="/about" element= { <About /> } />
  <Route path="/contact" element= { <Contact Us /> } />

  {isLoggedIn ? (
    <>
    <Route path="/profile" element= { <div>this is my profile page</div> } />

    <Route path="/login" element= { <Navigate to="/" replace={true} /> } />
 
   
    </>
  ) : (
    <>
    <Route path="/login" element={ <Login /> } />
    <Route path="*" element= { <Navigate to="/login" replace={true} /> } />
    </>
  ) }

  
</Routes>

    </>
  )
}

export default App

 import React from 'react'
   import Navbar from './Components/Navbar/Navbar';
   import './App.css';
import Main from './Components/Main/Main';
import Cars from './Components/Cars/Cars';
import CarRental from './Components/CarRental/CarRental';
import FeaturesSection from './Components/FeaturesSection/FeaturesSection';
 function App() {
 
  return (
    <>
<Navbar/>

<Main/>
<Cars/>
 <CarRental/>
 <FeaturesSection/>
     </>
  )
}

export default App

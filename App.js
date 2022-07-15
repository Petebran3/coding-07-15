
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import {Route, Routes} from  "react-router-dom"
import About from "./pages/About"

function App() {
  
  
  
  return (
<>
  
  <Navbar/>
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </div>
  
</>
  )
}


export default App;

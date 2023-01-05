import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Card from "./Pages/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/Card" element={<Card/>}/>
        </Routes>
      </main>
  );
}

export default App;

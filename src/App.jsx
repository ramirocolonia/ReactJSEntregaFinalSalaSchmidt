import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Proximamente tu tienda de confianza..." />} />
        <Route path="/category/:cid" element={<ItemListContainer greeting="Proximamente tu tienda de confianza..." />} />
        <Route path="/item/:pid" element={<ItemDetailContainer />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

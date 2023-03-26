import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
      <Route path="/user-profile" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

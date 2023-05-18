import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgetPass from "./Components/ForgetPass";

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/forget-password" element={<ForgetPass/>}/>
    <Route path="/register" element={<Register/>}/>
      <Route path="/user-profile" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

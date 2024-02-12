import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./pages/Home";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <CustomFooter></CustomFooter>
    </BrowserRouter>
  );
}

export default App;

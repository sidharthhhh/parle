import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Nav from "./component/Nav";
import About from "./component/About";
import Brand from "./component/Brand";
import Recipies from "./component/Recipies";
import Carrers from "./component/Carrers";




function App() {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Brand />
      <Recipies />
      <Carrers />
    </>
  );
}

export default App;

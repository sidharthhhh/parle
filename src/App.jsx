import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Nav from "./component/Nav";
import { AppRoutes } from './routes';

function App() {
  return (
    <>
      <Nav />
      <Main />
      {/* <AppRoutes /> */}
    </>
  );
}

export default App;

import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import { AppRoutes } from './routes';

function App() {
  return (
    <>
      <Nav />
      <AppRoutes />
    </>
  );
}

export default App;

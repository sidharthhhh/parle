import { Routes, Route } from 'react-router-dom';
import Brand from './pages/Brand';
import About from './pages/About';
import Careers from './pages/Carrers';
import Recipes from './pages/Recipies';
import Main from './pages/Main';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Main />} path="/" />
      <Route element={<About />} path="/about" />
        
      <Route element={<Brand />} path="/brand" />
      <Route element={<Careers />} path="/carrers" />
      <Route element={<Recipes />} path="/recipies" />
    </Routes>
  );
};

import { Routes, Route } from 'react-router-dom';
import Brand from './pages/Brand';
import About from './pages/About';
import Careers from './pages/Carrers';
import Recipes from './pages/Recipies';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<About />} path="/about" />
      <Route element={<Brand />} path="/Brand " />
      <Route element={<Careers />} path="/carrers" />
      <Route element={<Recipes />} path="/recipies" />
    </Routes>
  );
};

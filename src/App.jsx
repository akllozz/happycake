import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage.jsx";
import NotFound from "./components/NotFound";
import Contacto from "./components/Contacto";

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="*" element={<NotFound />} />
  <Route path="/contacto" element={<Contacto />} />
</Routes>;


const App = () => {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};

export default App

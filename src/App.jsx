import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import ContactForm from "./components/Contacto";

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="*" element={<NotFound />} />
  <Route path="/contacto" element={<ContactForm />} />
</Routes>;


const App = () => {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactForm />} />
      </Routes>
    </div>
  );
};

export default App

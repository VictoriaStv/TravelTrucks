import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import CamperDetails from "./pages/CamperDetails/CamperDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

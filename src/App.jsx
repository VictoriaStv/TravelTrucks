import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import CamperDetails from "./pages/CamperDetails/CamperDetails";
import Header from "./components/Header/Header";
import TrailerFeatures from "./components/TrailerFeatures/TrailerFeatures";
import TrailerReviews from "./components/TrailerReviews/TrailerReviews";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";



import "modern-normalize/modern-normalize.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperDetails />}>
          <Route path="features" element={<TrailerFeatures />} />
          <Route path="reviews" element={<TrailerReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;

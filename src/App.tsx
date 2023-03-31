import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { RestaurantContext } from "./context/RestaurantContext";
import { restaurants } from "./data/restaurants";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  // const restaurantsData = restaurants
  
  return (
    <RestaurantContext.Provider value={{restaurants}}>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
    </RestaurantContext.Provider>
  );
}

export default App;
// export {RestaurantsData}

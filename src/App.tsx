import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { FavouriteRestaurantProvider } from "./context/FavouriteContext";
import { RestaurantContext } from "./context/RestaurantContext";
import { restaurants } from "./data/restaurants";
import DetailsPage from "./pages/DetailsPage";
import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage";

function App() {
  
  return (
    <FavouriteRestaurantProvider>
      <RestaurantContext.Provider value={{restaurants}}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/favourites" element={<FavouritePage />} />
        </Routes>
      </Router>
      </RestaurantContext.Provider>
    </FavouriteRestaurantProvider>
  );
}

export default App;

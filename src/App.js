import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BrandCards from "./components/BrandCards";
import BrandsCategories from "./components/BrandsCategories";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <BrandCards />
      <BrandsCategories />
      <Footer />
    </div>
  );
}

export default App;

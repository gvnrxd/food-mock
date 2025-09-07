// Import Components Here:

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FeaturedMenu from "./components/FeaturedMenu";
import AboutUs from "./components/AboutUs";
import CustomerReviews from "./components/CustomerReviews";
import HoursNLocation from "./components/HoursNLocations";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <FeaturedMenu />
        <AboutUs />
        <CustomerReviews />
        <HoursNLocation />
      </main>

      <Footer />
    </>
  );
}

export default App;

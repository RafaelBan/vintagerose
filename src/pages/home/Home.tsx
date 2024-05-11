import AboutUs from "./sections/AboutUs";
import Arrive from "./sections/Arrive";
import BestSeller from "./sections/BestSeller";
import ContactUs from "./sections/ContactUs";
import Nav from "./sections/Nav";
import Shop from "./sections/Shop";

function Home() {
  return (
    <div className="h-full w-full">
      <Nav />
      <Arrive />
      <BestSeller />
      <AboutUs />
      <Shop />
      <ContactUs />
    </div>
  );
}

export default Home;

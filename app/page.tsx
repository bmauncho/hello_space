import Projects from "./components/PageSection/Projects";
import ContactDetails from "./components/PageSection/ContactDetails";
import AboutUs from "./components/PageSection/AboutUs";
import ShopNow from "./components/PageSection/ShopNow";
import Funiture from "./components/PageSection/Funiture";

export default function Home() {
  return (
    <div>
      <div>
        <AboutUs />
        <Projects />
        <ShopNow />
        <Funiture />
        <ContactDetails />
      </div>
    </div>
  );
}

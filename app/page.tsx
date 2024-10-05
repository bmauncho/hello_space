import Projects from "./components/PageSection/Projects";
import ContactDetails from "./components/PageSection/ContactDetails";
import AboutUs from "./components/PageSection/AboutUs";

export default function Home() {
  return (
    <div>
      <div>
        <AboutUs />
        <Projects />
        <ContactDetails />
      </div>
    </div>
  );
}

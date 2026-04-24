import Homepage from "./components/Homepage";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutIntro from "./components/AboutIntro";
import TechStack from "./components/TechStack";
// import Test from "./components/Test";


export default function Home() {
  return (
    <>
      <Homepage />
      <AboutIntro />
      <About />
      <WhyChooseUs />
      <Contact />
      <TechStack />
      <Footer />

      {/* <Test /> */}

    </>
  );
}

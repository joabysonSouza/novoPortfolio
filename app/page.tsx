import Stacks from "./components/Stacks";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar"
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />

      <Stacks />
      <Works />
      <Contact />
    </>
  );
};

export default Home;

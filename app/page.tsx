import Stacks from "./components/Stacks";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
const Home = () => {
  return (
    <>
      <NavBar />

      <div id="Inicio">
        <Hero />
      </div>

      <div id="Stacks">
        <Stacks />
      </div>

      <div id="Projetos">
        <Works />
      </div>
      
      <div id="Contatos">
        <Contact />
      </div>
    </>
  );
};

export default Home;

import Scene from "./components/Computer";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Works from "./components/Works";

const Home = () => {
  return (
    <>
      <div className="w-96 m-6 text-center h-auto flex flex-col  md:w-full md:flex-row md:items-center md:h-screen  ">
        <div>
          <h1 className=" font-anton mt-40  text-white text-3xl md:text-7xl">
            Olá eu sou <span className="text-red-600">Joabyson</span>
          </h1>

          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            reprehenderit repudiandae
          </p>
        </div>

        <Scene />
      </div>
      
        <About/>
        <Works /> 
     
    </>
  );
};

export default Home;

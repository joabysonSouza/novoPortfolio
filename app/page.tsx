import Scene from "./components/Computer";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center md:flex-row ">
        <div className=" w-full m-auto p-4 text-center ">
          <h1 className=" font-anton  text-white text-3xl md:text-7xl">
            Olá eu sou <span className="text-red-600">Joabyson</span>
          </h1>

          <p className="w-96">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            reprehenderit repudiandae
          </p>
        </div>

        <Scene />
      </div>
    </>
  );
};

export default Home;

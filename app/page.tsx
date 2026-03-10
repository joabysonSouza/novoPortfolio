
"use client"
import Stacks from "./components/Stacks";
import Works from "./components/Works";
import Contact from "./components/Contact";
import dynamic from "next/dynamic";
import LoadingSpinner from "./components/Spinner";
import NavBar from "./components/NavBar";
import {Element, Link} from "react-scroll"

 

const SceneDynamic = dynamic(() => import("./components/Computer"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});



const Home = () => {




  
  return (
    <>
    <Element name="Inicio"> 
       <NavBar />
         </Element>
      <div className="w-96 m-6 text-center h-auto flex flex-col  md:w-full md:flex-row md:items-center md:h-screen  ">
        
        <div>
          <h1 className=" font-anton mt-40  text-white text-3xl md:text-7xl">
            Olá eu sou <span className="text-red-600">Joabyson</span>
          </h1>
          

          <p className="p-4 text-2xl">
            Analista e Desenvolvedor  de Sistemas   
            FullStack 
          </p>
        </div>
      

        <SceneDynamic/>
      </div>
      
        <Stacks />
        <Works  /> 
        <Contact/>
     
    </>
  );
};

export default Home;

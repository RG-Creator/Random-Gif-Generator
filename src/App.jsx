import { all } from "axios";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <h1 className= "text-right w-11/12 text-xl font-extrabold mt-2 py-4 uppercase"><a href="https://rg-creator.github.io/Rohit-Gupta/" className=" uppercase cursor-pointer hover:text-gray-800 transition-all duration-500 ease-in" target="_blank">Home</a></h1>
      <h1 className="bg-white text-center w-11/12 rounded-xl text-3xl font-extrabold mt-1 py-4 uppercase">Random Gifs</h1>
      <div className="flex flex-col w-11/12 justify-center items-center mt-8 gap-8">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

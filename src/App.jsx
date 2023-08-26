import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <h1 className="bg-white text-center w-11/12 rounded-xl text-3xl font-extrabold mt-6 py-4 uppercase">Random Gifs</h1>
      <div className="flex flex-col w-11/12 justify-center items-center mt-8 gap-8">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

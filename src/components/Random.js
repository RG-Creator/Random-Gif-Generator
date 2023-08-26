import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random(){

    const {gif,loading,fetchdata} = useGif();
    return(
        <div className="w-11/12 md:w-9/12 lg:7/12 min-h-[400px] bg-green-400 flex flex-col items-center justify-between gap-4 py-6 rounded-lg border-black border-[1px]">
            <h1 className="text-2xl uppercase font-bold underline">A Random GIF</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width={450}/>)
            }
            <button className="w-10/12 bg-green-100 rounded-xl py-2 font-semibold text-xl"
            onClick={() => fetchdata()}>
                Generate
            </button>
        </div>
    );
}
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag(){
    const [tag,setTag] = useState('Naruto');
    const {gif,loading,fetchdata} = useGif(tag);

    return(
        <div className="w-7/12 min-h-[150px] bg-blue-400 flex flex-col items-center justify-between gap-4 py-6 rounded-lg border-black border-[1px] mb-6">
            <h1 className="text-2xl uppercase font-bold underline">Random {tag} GIF</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif} width={450}/>)
            }
            <input className="w-10/12 rounded-xl py-2 text-xl text-center" placeholder="Enter Tag" onChange={(e) => setTag(e.target.value)} value={tag}/>
            <button className="w-10/12 bg-green-100 rounded-xl py-2 font-semibold text-xl" onClick={() => fetchdata()}>
                Generate
            </button>
        </div>
    );
}
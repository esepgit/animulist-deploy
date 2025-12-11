import { useContext } from "react";
import { AnimeContext } from "../context/AnimeContext";

const useAnimeContext = () => useContext(AnimeContext)

export default useAnimeContext
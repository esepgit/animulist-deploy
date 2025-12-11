import { useState, useEffect } from "react"
import AnimeList from "./AnimeList"
import axios from "axios"
import useAnimeContext from "../hooks/useAnimeContext"
import { animes as initialAnimes } from "../constants/initialAnimes"
import Navigation from "./Navigation"
import { IconSearch } from "@tabler/icons-react"

let lastPage = 1000

function Animes() {
  const [allAnimes, setAllAnimes] = useState(initialAnimes.data)
  const [animeName, setAnimeName] = useState("")
  const [page, setPage] = useState(1)

  const { showAnime } = useAnimeContext()

  const animeByName = allAnimes.filter(anime => anime.title.toLowerCase().includes(animeName))
  

  //lo limito a 24 resultados para mejor visualizacion de front
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime?sfw=true&limit=24")
      .then(({data}) => {
        setAllAnimes(data.data)
        lastPage = data.pagination.last_visible_page
      })
      .catch(err => console.log(err))
  }, [])

  const handleClickPrev = () => {
    if (page > 1) {
      axios
        .get(`https://api.jikan.moe/v4/anime?page=${page - 1}&sfw=true&limit=24`)
        .then(({ data }) => {
          setAllAnimes(data.data)
          setPage(data.pagination.current_page)
        })
        .catch((err) => console.log(err));
    }  
  }

  const handleClickNext = () => {
    if (page < lastPage) {
      axios
        .get(`https://api.jikan.moe/v4/anime?page=${page + 1}&sfw=true&limit=24`)
        .then(({ data }) => {
          setAllAnimes(data.data);
          setPage(data.pagination.current_page);
        })
        .catch((err) => console.log(err));
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${e.target.search.value}&sfw=true&limit=24`)
      .then(({ data }) => {
        setAllAnimes(data.data);
        setPage(data.pagination.current_page);
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="p-4 py-5">
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-2 rounded-2xl text-lg border flex justify-between">
          <input
            name="search"
            type="text"
            className="outline-none w-[80%]"
            placeholder="Search your anime..."
          />
          <button type="submit" className="bg-orange-500 hover:bg-orange-300 rounded-lg p-1">
            <IconSearch color="white" />
          </button>
        </div>
      </form>
      <AnimeList animes={animeByName} showAnime={showAnime} />
      <Navigation
        onClickPrev={handleClickPrev}
        onClickNext={handleClickNext}
        page={page}
      />
    </section>
  );
}

export default Animes
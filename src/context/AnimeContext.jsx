import { createContext, useState } from "react";

const AnimeContext = createContext()

const AnimeProvider = ({ children }) => {
  const [animeDetail, setAnimeDetail] = useState(null)
  const [showAnimeDetail, setShowAnimeDetail] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const showAnime = (animeInfo) => {
    setIsLoading(true)
    setAnimeDetail({
      image: animeInfo.images.webp.image_url,
      title: animeInfo.title,
      "title-jp": animeInfo.title_japanese,
      synopsis: animeInfo.synopsis,
      genres: animeInfo.genres,
      episodes: animeInfo.episodes,
      score: animeInfo.score,
      year: animeInfo.year,
      status: animeInfo.status,
      themes: animeInfo.themes
    })

    setShowAnimeDetail(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  }

  const closeAnimeDetail = () => {
    setShowAnimeDetail(false)
  }

  return (
    <AnimeContext.Provider value={{
      animeDetail,
      showAnime,
      closeAnimeDetail,
      showAnimeDetail,
      isLoading
    }}>
      {children}
    </AnimeContext.Provider>
  )
}

export { AnimeContext, AnimeProvider }
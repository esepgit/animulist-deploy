import { animes as initialAnimes } from "../constants/initialAnimes"

function AnimeList({ animes=initialAnimes.data, showAnime }) {
  console.log(animes)
  return (
    <section className="justify-items-center pt-14 mx-4 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-10">
      {animes.map(anime => (
        <article key={anime.mal_id} onClick={() => showAnime(anime)} className="relative h-[256px] w-[200px] overflow-hidden cursor-pointer border-2 hover:border.slate-200 border-transparent shadow-slate-400/10 shadow-lg capitalize text-center bg-white rounded-[30px] font-semibold pb-4 group">
          <header className="h-full">
            <img src={anime.images.webp.image_url} className="h-full w-full object-cover group-hover:scale-110 transition-transform" />
          </header>
          <span className="p-1 absolute bottom-0 left-0 w-full bg-white leading-4">
            {anime.title}
          </span>
        </article>
      ))}
    </section>
  )
}

export default AnimeList

function AnimeDetail({ anime }) {
  console.log("detail", anime)
  return (
    <>
      <header className="flex h-[250px]">
        <img className="lg:hidden w-[25%]" src={anime?.image} />
        <div className="hidden-scroll overflow-scroll px-2 text-lg">
          <p>{anime?.synopsis}</p>
        </div>
      </header>

      <div className="mt-6">
        <ul className="flex gap-2 justify-center my-4 flex-wrap">
          {anime?.genres.map((genre) => (
            <li
              key={genre?.mal_id}
              className="bg-blue-200 text-sm p-1 rounded-md px-2"
            >
              {genre?.name}
            </li>
          ))}
        </ul>
        <div>
          <section className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <h4 className="font-bold capitalize">Episodes</h4>
              <span className="bg-slate-100 block rounded-full p-1">
                {anime?.episodes}
              </span>
            </div>
            <div className="grid gap-2">
              <h4 className="font-bold capitalize">Score</h4>
              <span className="bg-slate-100 block rounded-full p-1">
                {anime?.score}
              </span>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <h4 className="font-bold capitalize">Year</h4>
              <span className="bg-slate-100 block rounded-full p-1">
                {anime?.year}
              </span>
            </div>
            <div className="grid gap-2">
              <h4 className="font-bold capitalize">Status</h4>
              <span className="bg-slate-100 block rounded-full p-1">
                {anime?.status}
              </span>
            </div>
          </section>

          <section className="grid gap-2 mt-6">
            <h4 className="text-center font-bold capitalize">Themes</h4>
            <ul className="flex justify-center gap-3 flex-wrap">
              {anime?.themes.map((theme) => (
                <li
                  key={theme.mal_id}
                  className={`bg-orange-200 p-1 rounded-full px-2`}
                >
                  {theme.name}
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </>
  );
}

export default AnimeDetail
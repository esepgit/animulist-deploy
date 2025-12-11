
import AnimeModal from "./components/AnimeModal";
import Animes from "./components/Animes";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import useAnimeContext from "./hooks/useAnimeContext";


function App() {
  const { showAnimeDetail, closeAnimeDetail, animeDetail, isLoading } = useAnimeContext()

  return (
    <>
    <Navbar />
      <section className="overflow-x-hidden h-screen overflow-y-auto">
        <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
          <Animes />
          <Aside anime={animeDetail} isLoading={isLoading} />
          <AnimeModal
            showModal={showAnimeDetail}
            closeModal={closeAnimeDetail}
            anime={animeDetail}
          />
        </main>
      </section>
    </>
  );
}

export default App

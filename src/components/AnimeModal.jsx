import AnimeDetail from "./AnimeDetail"
import { IconX } from "@tabler/icons-react";

function AnimeModal({ showModal , closeModal, anime }) {
  console.log("modal", anime)
  return (
    <section
      className={`bg-slate-400 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } fixed lg:hidden top-0 left-0 right-0 h-screen transition-all duration-500`}
    >
      <div className="grid justify-center w-[80%] absolute left-1/2 -translate-x-1/2 translate-y-4 text-white font-bold capitalize my-5">
        <h2 className="lg:text-black text-2xl">{anime?.title}</h2>
        <span className="lg:text-black text-sm">{anime?.["title-jp"]}</span>
      </div>
      <button
        onClick={closeModal}
        className="bg-white absolute z-31 top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity"
      >
        <IconX size={32} stroke={4} />
      </button>
      <article
        className={`${
          showModal ? "bottom-0" : "-bottom-full"
        } bg-white h-[85%] transition-all duration-500 mt-32  w-full rounded-tl-3xl rounded-tr-3xl text-center p-4`}
      >
        <AnimeDetail anime={anime} />
      </article>
    </section>
  );
}

export default AnimeModal
import LogoComponent from "./LogoComponent"

function Navbar() {
  return (
    <header className="bg-black text-white text-2xl text-center py-4 flex justify-center items-center gap-2">
      <LogoComponent fill="#fff" width={24} height={24} /> ANIMULIST
    </header>
  )
}

export default Navbar
import { IconArrowBadgeLeftFilled, IconArrowBadgeRightFilled } from "@tabler/icons-react"
function Navigation({ onClickPrev, onClickNext, page }) {
  return (
    <div className="flex justify-center gap-2 my-8">
      <button onClick={onClickPrev} className="border rounded-md hover:bg-slate-300 border-black">
        <IconArrowBadgeLeftFilled size={32} />
      </button>
      <p className="hover:cursor-default border rounded-md text-center font-bold text-lg border-black w-8">
        {page}
      </p>
      <button onClick={onClickNext} className="hover:bg-slate-300 border rounded-md border-black">
        <IconArrowBadgeRightFilled size={32} />
      </button>
    </div>
  );
}

export default Navigation
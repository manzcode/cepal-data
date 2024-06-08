
function Opener({onClick, toggle}: {onClick?: () => void, toggle:boolean}) {
  return <div className="relative" onClick={onClick}>
  <div className={`absolute top-[25vh] ${toggle ? "left-[14vw]" : ""} cursor-pointer border-4 border-white flex justify-center items-center px-6 bg-indigo-800 rounded-full h-[60px] w-[60px]`}>
    <span className="w-2.5 aspect-[0.67] text-white">
      {toggle ? "<" : ">"}
    </span>
  </div>
</div>
}

export default Opener
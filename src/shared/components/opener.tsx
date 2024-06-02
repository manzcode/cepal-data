
function Opener({onClick}: {onClick?: () => void}) {
  return <div className="relative" onClick={onClick}>
  <div className="absolute left-[375px] top-[170px] border-4 border-white flex justify-center items-center px-6 bg-indigo-800 rounded-full h-[60px] w-[60px] max-md:px-5">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0123c66b5e7cfe45f9478c94050c77993252e102ff422b4f0b9119aa665c0aa9?"
      className="w-2.5 aspect-[0.67] fill-white"
    />
  </div>
</div>
}

export default Opener
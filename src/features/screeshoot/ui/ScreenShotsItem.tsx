function ScreenShotsItem({ image, id }: { image: string; id: number }) {
  return (
    <div className="flex gap-5 my-3 justify-between px-5 mt-7 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-3 text-black">
        <img
          src={image}
          alt={`Screenshots-${id}.png`}
          className="shrink-0 rounded-lg border border-solid bg-zinc-100 border-stone-300 h-[54px] w-[54px]"
        />
        <div className="flex-auto my-auto">Screenshots-{id}.png</div>
      </div>
      <a href={image} target="_blank" className="my-auto text-indigo-800 underline"> View</a>

    </div>
  );
}

export default ScreenShotsItem;

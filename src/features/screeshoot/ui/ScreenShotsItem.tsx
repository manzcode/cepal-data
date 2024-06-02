import Delete from "../actions/Delete";

function ScreenShotsItem({
  image,
  id,
  onClick,
}: {
  image: string;
  id: number;
  onClick?: () => void;
}) {
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
      <div className="flex">
        <a
          href={image}
          target="_blank"
          className="my-auto mr-2 text-indigo-800 underline "
        >
          {" "}
          View
        </a>
        <div
          onClick={onClick}
          className="my-auto mr-2 text-indigo-800 underline cursor-pointer"
        >
          {" "}
          edit
        </div>
        <Delete id={id} />
      </div>
    </div>
  );
}

export default ScreenShotsItem;

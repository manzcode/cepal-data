
function Close({onClick}: {onClick: () => void}) {
  return (
    <div className="w-full flex flex-row-reverse cursor-pointer" onClick={onClick}>
      <div className="rounded-full text-red-600  py-1 px-2 text-2xl">x</div>
    </div>
  );
}

export default Close;

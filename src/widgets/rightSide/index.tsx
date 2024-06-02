import Screenshots from "../../features/screeshoot";
import Report from "../Report";

function RightSide() {
  return (
    <div className="w-3/12 h-full border-r-2 border-t-2 border-zinc-100 flex flex-col">
      <div className="flex-grow mb-4">
        <Report />
      </div>
      <Screenshots />
    </div>
  );
}

export default RightSide;

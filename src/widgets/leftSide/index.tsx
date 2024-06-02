import Opener from "../../shared/components/opener";
import SideBar from "../../shared/components/SideBar";

function LeftSide() {
  return (
    <div className="w-2/12 h-full">
      <div>
        <Opener />
        <SideBar />
      </div>
    </div>
  );
}

export default LeftSide;

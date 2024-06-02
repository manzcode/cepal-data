import SideBar from "../../shared/components/SideBar";

function LeftSide() {
  return (
    <div className="w-3/12 h-full">
      <div className="flex">
        <div className="w-3/4">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default LeftSide;

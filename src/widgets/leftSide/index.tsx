import { useContext, useState } from "react";
import Opener from "../../shared/components/opener";
import SideBar from "../../shared/components/SideBar";
import { DashboardContext, ContextProps } from "../../entities/dashboard/context";

function LeftSide() {
  const context = useContext(DashboardContext);
  const { toggleSideBar } = context as ContextProps;
  const [toggle, setToggle] = useState(true)
  const hide = () => {
    setToggle(p => !p)
    toggleSideBar()
  }
  return (
    <div className={`${toggle ? "w-2/12" : "w-0"} h-auto`}>
        <Opener onClick={hide} toggle={toggle} />
        {
          toggle && <SideBar />
        }
    </div>
  );
}

export default LeftSide;

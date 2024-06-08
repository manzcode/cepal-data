import { useContext } from "react";
import { DashboardContext, ContextProps } from "../../entities/dashboard/context";
import Screenshots from "../../features/screeshoot";
import Report from "../Report";

function RightSide() {
  const context = useContext(DashboardContext);
  const { state } = context as ContextProps;
  return (
    <article className={`${state.showSideBar ? "w-3/12" : "w-4/12"} h-full border-r-2 border-t-2 border-zinc-100 flex flex-col`}>
      <section className="flex-grow mb-4">
        <Report />
      </section>
      <section>
        <Screenshots />
      </section>
    </article>
  );
}

export default RightSide;

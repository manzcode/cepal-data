import { useContext } from "react";
import { DashboardContext, ContextProps } from "../../entities/dashboard/context";
import TimeSheet from "../../features/timesheet/TimeSheet";
import Todo from "../../features/todo";

function Activities() {
  const context = useContext(DashboardContext);
  const { state } = context as ContextProps;
  return (
    <article className={`${state.showSideBar ? "w-7/12" : "w-8/12"} h-auto border-r-2 border-t-2 mx-6 border-zinc-100 flex flex-col`}>
      <section className="flex-grow px-8">
        <TimeSheet />
      </section>
      <section>
        <Todo />
      </section>
    </article>
  );
}

export default Activities;

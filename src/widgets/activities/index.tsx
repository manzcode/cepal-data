import TimeSheet from "../../features/timesheet/TimeSheet";
import Todo from "../../features/todo";

function Activities() {
  return (
    <article className="w-6/12 h-full border-r-2 border-t-2 border-zinc-100 flex flex-col">
      <section className="flex-grow">
        <TimeSheet />
      </section>
      <section>
        <Todo />
      </section>
    </article>
  );
}

export default Activities;

import TimeSheet from "../../features/timesheet/TimeSheet";
import Todo from "../../features/todo";

function Activities() {
  return (
    <article className="w-7/12 h-full border-r-2 border-t-2 mx-6 border-zinc-100 flex flex-col">
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

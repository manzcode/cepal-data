import { useState } from "react";
import { extractMonthAndDay } from "../lib/getMonthAndDay";
import { Todo } from "../model/todo";
import Delete from "../actions/Delete";

interface TodoProps extends Todo {
  onClick?: () => void;
}

function TodoItem(props: TodoProps) {
  const date = extractMonthAndDay(props["date-to-do"]);
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className="flex gap-5 self-stretch my-3 max-md:flex-wrap">
      <div className="flex flex-col self-start text-indigo-800 whitespace-nowrap">
        <div className="text-4xl font-bold">{date?.day}</div>
        <div className="mt-3 text-2xl font-semibold">{date?.month}</div>
      </div>
      <div className="flex flex-col w-full gap-5 px-7 py-5 text-base bg-white rounded-lg border border-solid shadow-sm border-stone-300 max-md:px-5 max-md:max-w-full">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="text-black">{props["project-name"]}</div>
            <div className="mt-1 text-stone-300">{props.status}</div>
          </div>
          <div className="flex">
            <div
              className="my-auto mr-2 underline text-neutral-900 cursor-pointer"
              onClick={() => setShowDetail((p) => !p)}
            >
              {showDetail ? "x" : "Details"}
            </div>
            {!showDetail && <>
              <div
                className="my-auto mr-4 underline text-neutral-900 cursor-pointer"
                onClick={props.onClick}
              >
                Edit
              </div>
              <Delete id={props.id} />
            </>}
          </div>
        </div>
        {showDetail && (
          <div className="mt-5 text-black">{props.description}</div>
        )}
      </div>
    </div>
  );
}

export default TodoItem;

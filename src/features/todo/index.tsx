import { useQuery } from "@tanstack/react-query";
import { usePaginationHooks } from "../timesheet/lib/hooks";
import TodoItem from "./ui/TodoItem";
import { getTodoPerPage } from "./api/getTodoPerPage";
import { apiEndpoint } from "./constant/endpoint";
import Spiner from "../../shared/components/spiner";
import ErrorMessage from "../../shared/components/ErrorMessage";
import Pagination from "../../widgets/Pagination";
import { useContext, useState } from "react";
import {
  DashboardContext,
  ContextProps,
} from "../../entities/dashboard/context";
import Modal from "../../shared/components/modal";
import Close from "../timesheet/ui/close";
import UpdateTodo from "./actions/updateTodo";

function Todo() {
  const context = useContext(DashboardContext);
  const { state, addTodos } = context as ContextProps;
  const { currentPage, next, prev } = usePaginationHooks();
  const { isPending, isError, data, error } = useQuery({
    queryKey: [apiEndpoint.todo, currentPage],
    queryFn: async () => {
      const res = await getTodoPerPage(currentPage);
      addTodos(res.data);
      return res.data;
    },
  });

  const [update, setUpdate] = useState<number | undefined>();

  return (
    <>
      <div className="border-t-2 border-zinc-100 flex-grow flex flex-col gap-5 px-5 mt-4 text-2xl font-semibold text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto">
          <p className="my-2">To do lists</p>
          <div>
            {isPending && <Spiner />}
            {isError && <ErrorMessage message={error.message} />}
            {state.todo?.map((value) => {
              return (
                <TodoItem
                  key={value.id}
                  id={value.id}
                  project-name={value["project-name"]}
                  description={value.description}
                  status={value.status}
                  date-to-do={value["date-to-do"]}
                  onClick={() => { setUpdate(value.id) }}
                />
              );
            })}
          </div>
          <Pagination
            current={currentPage}
            next={next}
            prev={prev}
            isNext={data?.length as number}
          />
        </div>
      </div>
      {update && (
        <Modal
          title={
            <Close
              onClick={() => {
                setUpdate(undefined);
              }}
            />
          }
        >
          <UpdateTodo id={update} />
        </Modal>
      )}
    </>
  );
}

export default Todo;

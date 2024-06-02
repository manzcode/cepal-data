import { useQuery } from "@tanstack/react-query";
import { key } from "./constant/key";
import { getTimeSheetPerPage } from "./api";
import Spiner from "../../shared/components/spiner";
import { color } from "./constant/color";
import TimeSheetItem from "./ui/TimeSheetItem";
import { usePaginationHooks } from "./lib/hooks";
import ErrorMessage from "../../shared/components/ErrorMessage";
import Pagination from "../../widgets/Pagination";
import { useContext, useState } from "react";
import { DashboardContext, ContextProps } from "../../entities/dashboard/context";
import Modal from "../../shared/components/modal";
import Update from "./actions/update";
import Close from "./ui/close";

function TimeSheet() {
  const context = useContext(DashboardContext);
  const { state,addTimeSheets } = context as ContextProps;
  const { currentPage, next, prev } = usePaginationHooks();
  const { isPending, isError, data, error } = useQuery({
    queryKey: [key.TimesheetPerPage, currentPage],
    queryFn: async () => {
      const res = await getTimeSheetPerPage(currentPage);
      addTimeSheets(res.data)
      return res.data;
    },
  });
  const idcolor = [color.indigo, color.yellow, color.green] as const;
  const [update, setUpdate] = useState<number | undefined>()
  
  return (
    <>
      <div className="flex gap-5 m-4 max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between px-5 rounded-lg border border-solid bg-zinc-100 border-stone-300 max-md:pl-5">
          <div className="my-auto px-4 text-base text-black">Task list</div>
          <div className="flex gap-4">
            <div className="shrink-0 w-px border border-solid bg-stone-300 border-stone-300 h-[55px]" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/03717c258deae37c034ed732b0ce4f4b70c1b6861bff5c0ce9a66fb068afc66e?"
              className="shrink-0 my-auto w-5 aspect-[2.22] fill-neutral-400"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-end px-5 max-md:flex-wrap max-md:max-w-full">
          <div className="text-2xl font-semibold">Timesheet</div>
          <div className="self-start ml-4 font-bold tracking-wider text-indigo-800 uppercase max-md:ml-2.5">
            view full sheet
          </div>
        </div>
        <table className="m-3 divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-base text-black border-r-2 border-zinc-100">
                Project name
              </th>
              <th className="px-6 py-3 text-left text-base text-black border-r-2 border-zinc-100">
                Date
              </th>
              <th className="px-6 py-3 text-left text-base text-black border-r-2 border-zinc-100">
                Start time
              </th>
              <th className="px-6 py-3 text-left text-base text-black border-r-2 border-zinc-100">
                End time
              </th>
              <th className="px-6 py-3 text-left text-base text-black">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-base text-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td colSpan={5}>{isPending && <Spiner />}</td>
            </tr>
            {isError && (
              <tr>
                <ErrorMessage message={error.message} />
              </tr>
            )}
            {state.timeSheet?.map((value, index) => (
              <TimeSheetItem
                key={index}
                date={value.date}
                IdColor={idcolor[index % idcolor.length]}
                id={value.id}
                duration={value.duration}
                start-end-time={value["start-end-time"]}
                project-name={value["project-name"]}
                onClick={() => setUpdate(value.id)}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          current={currentPage}
          next={next}
          prev={prev}
          isNext={data?.length as number}
        />
      </div>
      {
        update && <Modal title={<Close onClick={() => {setUpdate(undefined)}} />} >
        <Update id={update} />
      </Modal>
      }
    </>
  );
}

export default TimeSheet;

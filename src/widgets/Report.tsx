import { useContext } from "react";
import { DashboardContext, ContextProps } from "../entities/dashboard/context";

function Report() {
  const context = useContext(DashboardContext);
  const { toggleShow } = context as ContextProps;
  return (
    <>
      <div className="flex flex-row-reverse gap-5 m-4 max-md:flex-wrap max-md:max-w-full">
        <div
          onClick={() => toggleShow()}
          className="flex cursor-pointer justify-center p-4 py-text-base font-semibold tracking-wider text-indigo-800 uppercase rounded-lg border border-solid bg-zinc-100 border-stone-300 max-md:px-5"
        >
          + Add project
        </div>
      </div>
      <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-end px-5 max-md:flex-wrap max-md:max-w-full">
          <div className="text-2xl font-semibold">Report</div>
        </div>
        <div className="flex gap-5 justify-between py-3 pr-10 pl-3 mt-4 w-full bg-indigo-800 rounded-lg max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-4 font-semibold">
            <div className="shrink-0 rounded-md bg-zinc-100 bg-opacity-30 h-[69px] w-[69px]" />
            <div className="flex flex-col my-auto">
              <div className="text-base tracking-wider uppercase text-stone-300">
                Weekly activity
              </div>
              <div className="mt-3 text-2xl text-white">75%</div>
            </div>
          </div>
          <div className="justify-center self-start px-2.5 py-2.5 text-sm font-bold text-white whitespace-nowrap bg-green-500 rounded-sm">
            +17%
          </div>
        </div>
        <div className="flex gap-5 py-3 pr-10 pl-3 mt-5 w-full rounded-lg border border-solid bg-zinc-100 border-stone-300 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-auto gap-4 font-semibold">
            <div className="shrink-0 bg-white rounded-md border border-solid border-stone-300 h-[69px] w-[69px]" />
            <div className="flex flex-col my-auto">
              <div className="text-base tracking-wider text-indigo-800 uppercase">
                Time spent this week
              </div>
              <div className="mt-3 text-2xl text-neutral-900">30:25:18</div>
            </div>
          </div>
          <div className="justify-center self-start px-2.5 py-2.5 text-sm font-bold text-white whitespace-nowrap bg-amber-400 rounded-sm">
            -10%
          </div>
        </div>
        <div className="flex justify-center items-center px-16 py-6 mt-16 text-base font-bold tracking-wider text-indigo-800 uppercase rounded-lg bg-zinc-100 border-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          EXPORt as pdf
        </div>
      </div>
    </>
  );
}

export default Report;

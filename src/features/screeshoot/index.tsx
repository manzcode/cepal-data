import { useQuery } from "@tanstack/react-query";
import { usePaginationHooks } from "../timesheet/lib/hooks";
import { getScreenshootPerPage } from "./api/getScreeshootPerPage";
import { sreenshootEndpoint } from "./constant/endpoint";
import ScreenShotsItem from "./ui/ScreenShotsItem";
import ErrorMessage from "../../shared/components/ErrorMessage";
import Spiner from "../../shared/components/spiner";
import Pagination from "../../widgets/Pagination";
import { useContext } from "react";
import { DashboardContext, ContextProps } from "../../entities/dashboard/context";

function Screenshots() {
  const context = useContext(DashboardContext);
  const { state,addScreenShoots } = context as ContextProps;
  const { currentPage, next, prev } = usePaginationHooks();
  const { isPending, isError, data, error } = useQuery({
    queryKey: [sreenshootEndpoint.key.pagination, currentPage],
    queryFn: async () => {
      const res = await getScreenshootPerPage(currentPage);
      addScreenShoots(res.data)
      return res.data;
    },
  });
  
  return (
    <div className="flex-grow flex flex-col gap-5 px-5 mt-20 max-md:max-w-full border-t-2 border-zinc-100">
      <p className="my-2 text-2xl font-semibold">Screenshots</p>
      <div>
        {isPending && <Spiner />}
        {isError && <ErrorMessage message={error.message} />}
        {state.screeShoot?.map((value) => {
          return (
            <ScreenShotsItem
              key={value.id}
              id={value.id}
              image={value.screenshots}
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
  );
}

export default Screenshots;

import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { TimeSheet } from "../model/interface";
import { useMutation } from "@tanstack/react-query";
import {
  DashboardContext,
  ContextProps,
} from "../../../entities/dashboard/context";
import Spiner from "../../../shared/components/spiner";
import { revertDateTime } from "../lib/revertTodateTime";
import { updateTimeSheet } from "../api/updateTimeSheet";
import { transformDate } from "../../todo/lib/transformData";

function Update({ id }: { id: number }) {
  const context = useContext(DashboardContext);
  const { state, updateTimeSheet: updateSheet } = context as ContextProps;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm<Partial<TimeSheet>>();

  const { isPending, mutate } = useMutation({
    mutationFn: async (newtime: Partial<TimeSheet>) =>
      await updateTimeSheet(newtime, id),
    onSuccess: (data: any) => {
      updateSheet(data.data);
      reset();
    },
  });

  useEffect(() => {
    const theTimeSheet = state.timeSheet.find((value) => value.id === id);
    if (theTimeSheet) {
      setValue("project-name", theTimeSheet["project-name"]);
      setValue(
        "start-end-time",
        revertDateTime(theTimeSheet["start-end-time"])
      );
      setValue("duration", theTimeSheet.duration);
      setValue("date", revertDateTime(theTimeSheet.date));
    }
  }, [id, setValue, state.timeSheet]);

  const onSubmit = (data: any) => {
    const date = transformDate(
      data.date.split("T")[0],
      data.date.split("T")[1]
    );
    mutate({
      ...data,
      date,
      "start-end-time": transformDate(
        data["start-end-time"].split("T")[0],
        data["start-end-time"].split("T")[1]
      ),
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Timesheet</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="text">
            Project name
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
            placeholder="test"
            {...register("project-name", {
              required: "Project name is required",
              minLength: {
                value: 3,
                message: "Minimum length is 3",
              },
            })}
          />
          {errors["project-name"] && (
            <p className="text-red-500 mt-1">
              {errors["project-name"].message as string}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="date1">
            date
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="datetime-local"
            {...register("date", {
              required: "date end time is required",
              validate: (value) =>
                value! < getValues()["start-end-time"]! ||
                "date must be lower than Start end time",
            })}
          />
          {errors.date && (
            <p className="text-red-500 mt-1">{errors.date.message as string}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="date2">
            Start end time
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="datetime-local"
            {...register("start-end-time", {
              required: "Start end time is required",
              validate: (value) =>
                value! > getValues().date! ||
                "start-end-time must be greater than Date ",
            })}
          />
          {errors["start-end-time"] && (
            <p className="text-red-500 mt-1">
              {errors["start-end-time"].message as string}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="number">
            Duration
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="number"
            {...register("duration", {
              required: "Duration is required",
              min: {
                value: 1,
                message: "Minimum value is 1",
              },
            })}
          />
          {errors.duration && (
            <p className="text-red-500 mt-1">
              {errors.duration.message as string}
            </p>
          )}
        </div>
        {isPending ? (
          <Spiner />
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="submit"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Update;

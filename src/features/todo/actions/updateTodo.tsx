import { useMutation } from "@tanstack/react-query";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { Todo } from "../model/todo";
import Spiner from "../../../shared/components/spiner";
import {
  DashboardContext,
  ContextProps,
} from "../../../entities/dashboard/context";
import { transformDate } from "../lib/transformData";
import { updateTodo } from "../api/updateTodot";
import { revertDateTime } from "../../timesheet/lib/revertTodateTime";

interface Option {
  value: string;
  label: string;
}

const options: Option[] =  [
  { value: "On Delivery Vehicle", label: "On Delivery Vehicle" },
  { value: "At Warehouse", label: "At Warehouse" },
  { value: "Shipped", label: "Shipped" },
  { value: "Delivered", label: "Delivered" },
];

function UpdateTodo({id}: {id: number}) {
  const context = useContext(DashboardContext);
  const { state, updateTodo: update } = context as ContextProps;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<Partial<Todo>>();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const { isPending,mutate } = useMutation({
    mutationFn: async (newtodo: Partial<Todo>) =>
      await updateTodo({ ...newtodo, status: selectedOption?.value }, id),
    onSuccess: (data: any) => {
      update(data.data);
    },
  });

  useEffect(() => {
    const theTodo = state.todo.find((value) => value.id === id);
    if (theTodo) {
      setValue("project-name", theTodo["project-name"]);
      setValue(
        "description",
        theTodo.description
      );
      setValue("date-to-do", revertDateTime(theTodo["date-to-do"]).split("T")[0]);
      setSelectedOption({value: theTodo.status, label: theTodo.status})
    }
  }, [id, setValue, state.todo]);

  const handleSelectChange = (option: any) => {
    setSelectedOption(option);
  };

  const onSubmit = (data: any) => {
    mutate({...data, "date-to-do": transformDate(data["date-to-do"]), status: selectedOption?.value})
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="select">
            Status
          </label>
          <Select
            id="select"
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="text">
            Project name
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="text"
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
          <label className="block mb-2" htmlFor="textarea">
            Description
          </label>
          <textarea
            className="w-full border rounded-md py-2 px-3"
            placeholder="Description"
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 mt-1">
              {errors.description.message as string}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="date"
            {...register("date-to-do", {
              required: "Date is required",
            })}
          />
          {errors["date-to-do"] && (
            <p className="text-red-500 mt-1">
              {errors["date-to-do"].message as string}
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

export default UpdateTodo;


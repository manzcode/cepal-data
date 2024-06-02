import instance from "../../../shared/api/baseApi";
import { apiEndpoint } from "../constant/endpoint";
import { Todo } from "../model/todo";

export const deleteTodo = async (id: number) => await instance.delete<Partial<Todo>, Todo>(`${apiEndpoint.todo}/${id}`)
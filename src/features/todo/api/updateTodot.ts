import instance from "../../../shared/api/baseApi";
import { apiEndpoint } from "../constant/endpoint";
import { Todo } from "../model/todo";


export const updateTodo = async (data: Partial<Todo>, id: number) => await instance.patch<Partial<Todo>, Todo>(`${apiEndpoint.todo}/${id}`, data)
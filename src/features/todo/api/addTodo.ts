import instance from "../../../shared/api/baseApi";
import { apiEndpoint } from "../constant/endpoint";
import { Todo } from "../model/todo";

export const addTodo = async (data: Partial<Todo>) => await instance.post<Partial<Todo>, Todo>(`${apiEndpoint.todo}`, data)
import instance from "../../../shared/api/baseApi";
import { apiEndpoint } from "../constant/endpoint";
import { Todo } from "../model/todo";

export const getTodoPerPage = async (page:number) => await instance.get<Todo[]>(`${apiEndpoint.todo}?_page=${page}&_limit=3`)
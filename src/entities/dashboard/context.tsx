import { createContext, useReducer, ReactNode } from "react";
import { Todo } from "../../features/todo/model/todo";
import { TimeSheet } from "../../features/timesheet/model/interface";
import { SreenShoot } from "../../features/screeshoot/model/screenshoot";

// Définir les types pour l'état et les actions
interface State {
  show: boolean;
  witch: number;
  todo: Todo[];
  timeSheet: TimeSheet[];
  screeShoot: SreenShoot[];
}

type Action =
  | { type: "TOGGLE_SHOW" }
  | { type: "SET_WITCH"; payload: number }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "ADD_TIMESHEET"; payload: TimeSheet }
  | { type: "ADD_SCREENSHOOT"; payload: SreenShoot }
  | { type: "DELETE_TODO"; payload: Todo }
  | { type: "DELETE_TIMESHEET"; payload: TimeSheet }
  | { type: "DELETE_SCREENSHOOT"; payload: SreenShoot }
  | { type: "ADD_TODOS"; payload: Todo[] }
  | { type: "ADD_TIMESHEETS"; payload: TimeSheet[] }
  | { type: "ADD_SCREENSHOOTS"; payload: SreenShoot[] }
  | { type: "UPDATE_TODO"; payload: Todo }
  | { type: "UPDATE_TIMESHEET"; payload: TimeSheet }
  | { type: "UPDATE_SCREENSHOOT"; payload: SreenShoot };

export interface ContextProps {
  state: State;
  toggleShow: () => void;
  setWitch: (number: number) => void;
  addTodo: (todo: Todo) => void;
  addTimeSheet: (timeSheet: TimeSheet) => void;
  addScreenShoot: (screeShoot: SreenShoot) => void;
  deleteTodo: (todo: Todo) => void;
  deleteTimeSheet: (timeSheet: TimeSheet) => void;
  deleteScreenShoot: (screeShoot: SreenShoot) => void;
  addTodos: (todos: Todo[]) => void;
  addTimeSheets: (timeSheets: TimeSheet[]) => void;
  addScreenShoots: (screenShoots: SreenShoot[]) => void;
  updateTodo: (todo: Todo) => void; // Ajout de l'action pour la mise à jour du todo
  updateTimeSheet: (timeSheet: TimeSheet) => void; // Ajout de l'action pour la mise à jour du timesheet
  updateScreenShoot: (screenShoot: SreenShoot) => void;
}

// Définir les valeurs initiales de l'état
const initialState: State = {
  show: false,
  witch: 0,
  timeSheet: [],
  todo: [],
  screeShoot: [],
};

// Créer le contexte
const DashboardContext = createContext<ContextProps | undefined>(undefined);

// Définir le reducer pour gérer les actions
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_SHOW":
      return { ...state, show: !state.show };
    case "SET_WITCH":
      return { ...state, witch: action.payload };
    case "ADD_TODO":
      return { ...state, todo: [...state.todo, action.payload] };
    case "ADD_TIMESHEET":
      return { ...state, timeSheet: [...state.timeSheet, action.payload] };
    case "ADD_SCREENSHOOT":
      return { ...state, screeShoot: [...state.screeShoot, action.payload] };
    case "ADD_TODOS":
      return { ...state, todo: action.payload };
    case "ADD_TIMESHEETS":
      return { ...state, timeSheet: action.payload };
    case "ADD_SCREENSHOOTS":
      return { ...state, screeShoot: action.payload };
    case "UPDATE_TODO":
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "UPDATE_TIMESHEET":
      return {
        ...state,
        timeSheet: state.timeSheet.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "UPDATE_SCREENSHOOT":
      return {
        ...state,
        screeShoot: state.screeShoot.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload.id),
      };
    case "DELETE_TIMESHEET":
      return {
        ...state,
        timeSheet: state.timeSheet.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "DELETE_SCREENSHOOT":
      return {
        ...state,
        screeShoot: state.screeShoot.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

// Créer le provider
const DashBoardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleShow = () => dispatch({ type: "TOGGLE_SHOW" });
  const setWitch = (number: number) =>
    dispatch({ type: "SET_WITCH", payload: number });
  const addTodo = (todo: Todo) => dispatch({ type: "ADD_TODO", payload: todo });
  const addTimeSheet = (timeSheet: TimeSheet) =>
    dispatch({ type: "ADD_TIMESHEET", payload: timeSheet });
  const addScreenShoot = (screeShoot: SreenShoot) =>
    dispatch({ type: "ADD_SCREENSHOOT", payload: screeShoot });
    const deleteTodo = (todo: Todo) => dispatch({ type: "DELETE_TODO", payload: todo });
  const deleteTimeSheet = (timeSheet: TimeSheet) =>
    dispatch({ type: "DELETE_TIMESHEET", payload: timeSheet });
  const deleteScreenShoot = (screeShoot: SreenShoot) =>
    dispatch({ type: "DELETE_SCREENSHOOT", payload: screeShoot });
  const addTodos = (todos: Todo[]) =>
    dispatch({ type: "ADD_TODOS", payload: todos });
  const addTimeSheets = (timeSheets: TimeSheet[]) =>
    dispatch({ type: "ADD_TIMESHEETS", payload: timeSheets });
  const addScreenShoots = (screenShoots: SreenShoot[]) =>
    dispatch({ type: "ADD_SCREENSHOOTS", payload: screenShoots });
  const updateTodo = (todo: Todo) =>
    dispatch({ type: "UPDATE_TODO", payload: todo });
  const updateTimeSheet = (timeSheet: TimeSheet) =>
    dispatch({ type: "UPDATE_TIMESHEET", payload: timeSheet });
  const updateScreenShoot = (screenShoot: SreenShoot) =>
    dispatch({ type: "UPDATE_SCREENSHOOT", payload: screenShoot });

  return (
    <DashboardContext.Provider
      value={{
        state,
        toggleShow,
        setWitch,
        addTodo,
        addTimeSheet,
        addScreenShoot,
        addTodos,
        addTimeSheets,
        addScreenShoots,
        updateTodo,
        updateTimeSheet,
        updateScreenShoot,
        deleteTodo,
        deleteTimeSheet,
        deleteScreenShoot
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashBoardProvider };

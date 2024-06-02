import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { queryClient } from "./shared/api/baseApi";
import { DashBoardProvider } from "./entities/dashboard/context";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashBoardProvider>
        <Dashboard />
      </DashBoardProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
import { useContext } from "react";
import Button from "../../../shared/components/Button";
import { useMutation } from "@tanstack/react-query";
import {
  DashboardContext,
  ContextProps,
} from "../../../entities/dashboard/context";
import Spiner from "../../../shared/components/spiner";
import { deleteTimeSheet } from "../api/deleteSheet";

function Delete({ id }: { id: number }) {
  const context = useContext(DashboardContext);
  const { state, deleteTimeSheet: supprSheet } = context as ContextProps;
  const { isPending, mutate } = useMutation({
    mutationFn: async () => await deleteTimeSheet(id),
    onSuccess: () => {
      supprSheet(state.timeSheet.find((value) => value.id === id)!);
    },
  });
  const detele = () => {
    mutate()
  }
  return <>{isPending ? <Spiner /> : <Button color="red" onClick={detele}>Delete</Button>}</>;
}

export default Delete;

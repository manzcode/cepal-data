import { useContext } from "react";
import Button from "../../../shared/components/Button";
import { useMutation } from "@tanstack/react-query";
import {
  DashboardContext,
  ContextProps,
} from "../../../entities/dashboard/context";
import { deleteScreenShoot } from "../api/DeleteScreenshot";
import Spiner from "../../../shared/components/spiner";

function Delete({ id }: { id: number }) {
  const context = useContext(DashboardContext);
  const { state, deleteScreenShoot: supprScreen } = context as ContextProps;
  const { isPending, mutate } = useMutation({
    mutationFn: async () => await deleteScreenShoot(id),
    onSuccess: () => {
      supprScreen(state.screeShoot.find((value) => value.id === id)!);
    },
  });
  const detele = () => {
    mutate()
  }
  return <>{isPending ? <Spiner /> : <Button color="red" onClick={detele}>Delete</Button>}</>;
}

export default Delete;

import { useContext } from "react";
import { DashboardContext, ContextProps } from "../context";
import FormOne from "../../../features/timesheet/actions/add";
import FormTwo from "../../../features/todo/actions/add";
import FormThree from "../../../features/screeshoot/actions/add";

function SwitchForm() {
  const context = useContext(DashboardContext);
  const { state } = context as ContextProps;

  switch (state.witch) {
    case 0:
      return <FormOne />;
    case 1:
      return <FormTwo />;
    case 2:
      return <FormThree />;
  }
}

export default SwitchForm;

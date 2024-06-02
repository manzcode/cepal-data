import { useContext } from "react";
import {
  ContextProps,
  DashboardContext,
} from "../../entities/dashboard/context";
import Modal from "../../shared/components/modal";
import Activities from "../../widgets/activities";
import LeftSide from "../../widgets/leftSide";
import ModalTitle from "../../widgets/navtab/ModalTitle";
import RightSide from "../../widgets/rightSide";
import SwitchForm from "../../entities/dashboard/ui/switchForm";

function Dashboard() {
  const title = ["timesheet", "todo", "screenshoot"];
  const context = useContext(DashboardContext);
  const { state } = context as ContextProps;
  return (
    <div className="flex h-full">
      <LeftSide />
      <Activities />
      <RightSide />
      {state.show && (
        <Modal title={<ModalTitle title={title} />}>
          <SwitchForm />
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;

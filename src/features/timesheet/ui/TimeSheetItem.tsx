import Button from "../../../shared/components/Button";
import Delete from "../actions/Delete";
import { calculateEndDate } from "../lib/endTime";
import { TimeSheet } from "../model/interface";

interface Props extends TimeSheet {
  IdColor: string;
  onClick?: () => void;
}

function TimeSheetItem(props: Props) {
  return (
    <tr
      className={`${
        props.id % 2 === 0 ? "bg-white" : "bg-zinc-100 rounded-lg"
      }`}
    >
      <td className="px-6 py-4 text-base text-black border-r-2 border-zinc-100">
        <div className="flex items-center">
          <div
            className={`"flex-shrink-0 h-10 w-10 flex justify-center items-center text-2xl font-semibold ${props.IdColor} bg-white rounded-lg border border-stone-300"`}
          >
            {props.id}
          </div>
          <div className="ml-4">{props["project-name"]}</div>
        </div>
      </td>
      <td className="px-6 py-4 text-base text-black border-r-2 border-zinc-100">
        {props.date}
      </td>
      <td className="px-6 py-4 text-base text-black border-r-2 border-zinc-100">
        {props["start-end-time"]}
      </td>
      <td className="px-6 py-4 text-base text-black border-r-2 border-zinc-100">
        {calculateEndDate(props["start-end-time"], props.duration)}
      </td>
      <td className="px-6 py-4 text-base text-black">
        {props.duration} {props.duration > 1 ? "hours" : "hour"}
      </td>
      <td className="px-6 py-4 text-base text-black">
        <Button color="green" onClick={props.onClick}>
          Edit
        </Button>
      </td>
      <td className="px-6 py-4 text-base text-black">
        <Delete id={props.id} />
      </td>
    </tr>
  );
}

export default TimeSheetItem;

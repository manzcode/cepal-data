import TimeSheet from '../../features/timesheet/TimeSheet'
import Todo from '../../features/todo'

function Activities() {
  return <div className="w-6/12 h-full border-r-2 border-t-2 border-zinc-100 flex flex-col">
  <div className="flex-grow">
    <TimeSheet />
  </div>
  <Todo />
</div>
}

export default Activities
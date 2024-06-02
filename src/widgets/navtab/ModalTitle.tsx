import { useContext, useState } from "react";
import {
  DashboardContext,
  ContextProps,
} from "../../entities/dashboard/context";

function ModalTitle({ title }: { title: string[] }) {
  const context = useContext(DashboardContext);
  const { setWitch, toggleShow } = context as ContextProps;
  const [active, setActive] = useState(0)
  return (
    <div className="w-full max-w-2xl">
      <div className="flex justify-center items-center">
        {title.map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setWitch(index)
                setActive(index)
              }}
              className={`tab-button mx-2 px-4 py-2 ${active === index ? "bg-white text-blue-600 rounded-lg" : ""} hover:bg-white hover:text-blue-600 hover:rounded-lg focus:outline-none`}
            >
              {value}
            </button>
          );
        })}
        <button
          onClick={() => toggleShow()}
          className="ml-4 text-red-600 hover:text-red-800 focus:outline-none"
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default ModalTitle;

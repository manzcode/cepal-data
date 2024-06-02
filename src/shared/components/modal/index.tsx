import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    title?: ReactNode,
    footer?: ReactNode
}>

function Modal({title, footer, children}: Props) {
  return (
    <div className="flex justify-center items-center h-screen absolute">
      <div>
        <div
          className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center"
        >
          <div
            x-transition:enter="transition-opacity ease-out duration-300"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="transition-opacity ease-in duration-300"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          ></div>
          <div
            x-transition:enter="transition-transform ease-out duration-300"
            x-transition:enter-start="transform scale-75"
            x-transition:enter-end="transform scale-100"
            x-transition:leave="transition-transform ease-in duration-300"
            x-transition:leave-start="transform scale-100"
            x-transition:leave-end="transform scale-75"
            className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50"
          >
            <div className="bg-indigo-500 text-white px-4 py-2 flex justify-between">
              {title}
            </div>
            <div className="p-4">
              {children}
            </div>
            <div className="border-t px-4 py-2 flex justify-end">
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

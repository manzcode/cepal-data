import logo from "../assets/React Native.svg";
function SideBar() {
  return (
    <div className="flex flex-col grow items-center py-14 pr-20 pl-7 mx-auto w-full text-base bg-indigo-800 text-neutral-400 max-md:px-5">
      <div className="relative">
        <div className="absolute left-[230px] top-[70px] border-4 border-white flex justify-center items-center px-6 bg-indigo-800 rounded-full h-[60px] w-[60px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0123c66b5e7cfe45f9478c94050c77993252e102ff422b4f0b9119aa665c0aa9?"
            className="w-2.5 aspect-[0.67] fill-white"
          />
        </div>
      </div>

      <div className="flex gap-3.5 text-white">
        <img
          loading="lazy"
          src={logo}
          className="shrink-0 aspect-square w-[42px]"
        />
        <div className="my-auto">React JS Test</div>
      </div>
      <div className="flex gap-5 mt-20 text-white whitespace-nowrap max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c11ff0df2a9c3b885ef3225c0891483e1e49653c14c6d0e01c767d297b4f92?"
          className="shrink-0 w-5 aspect-square fill-white"
        />
        <div className="my-auto">Dashboard</div>
      </div>
      <div className="flex gap-5 mt-8 whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c11ff0df2a9c3b885ef3225c0891483e1e49653c14c6d0e01c767d297b4f92?"
          className="shrink-0 w-5 aspect-square fill-neutral-400"
        />
        <div>Activity</div>
      </div>
      <div className="flex gap-5 mt-8 whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c11ff0df2a9c3b885ef3225c0891483e1e49653c14c6d0e01c767d297b4f92?"
          className="shrink-0 w-5 aspect-square fill-neutral-400"
        />
        <div className="my-auto">Timesheet</div>
      </div>
      <div className="flex gap-5 mt-36 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c11ff0df2a9c3b885ef3225c0891483e1e49653c14c6d0e01c767d297b4f92?"
          className="shrink-0 w-5 aspect-square fill-neutral-400"
        />
        <div className="my-auto">To Do</div>
      </div>
      <div className="flex gap-5 mt-8 whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c11ff0df2a9c3b885ef3225c0891483e1e49653c14c6d0e01c767d297b4f92?"
          className="shrink-0 w-5 aspect-square fill-neutral-400"
        />
        <div>Report</div>
      </div>
      <div className="flex gap-5 mt-8 whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7c11ff0df2a9c3b885ef3225c0891483e1e49653c14c6d0e01c767d297b4f92?"
          className="shrink-0 w-5 aspect-square fill-neutral-400"
        />
        <div>Projects</div>
      </div>
      <div className="flex gap-5 mt-32 text-white whitespace-nowrap max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c7ec9a389e7420f0ec89ec5399e9eec1640f069c1822c060c57a6d2bde05085?"
          className="shrink-0 w-5 aspect-square fill-white"
        />
        <div>Help</div>
      </div>
      <div className="flex gap-5 self-start mt-72 w-full text-white max-md:mt-10">
        <div className="flex flex-1 gap-4">
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 aspect-square w-[35px]"
          />
          <div className="my-auto">Log out</div>
        </div>
        <div className="flex flex-1 gap-1.5 my-auto whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de114a237f0d5589640dd9b19486aebff204d13d5e28a1f074bd55abf2042762?"
            className="shrink-0 aspect-square w-[25px]"
          />
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

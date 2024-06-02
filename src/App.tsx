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

/** 



<div className="w-[1920px] h-[1080px] relative bg-white">
      <div className="w-96 h-[1080px] left-0 top-0 absolute bg-indigo-800" />
      <div className="w-[70px] h-[70px] left-[349px] top-[80px] absolute bg-white rounded-full" />
      <div className="w-[60px] h-[60px] left-[354px] top-[85px] absolute bg-indigo-800 rounded-full" />
      <div className="w-[1435px] h-[0px] left-[485px] top-[106px] absolute border border-zinc-100"></div>
      <div className="w-[1435px] h-[0px] left-[483px] top-[622px] absolute border border-zinc-100"></div>
      <div className="w-[429px] h-[0px] left-[1410px] top-[805px] absolute border border-zinc-100"></div>
      <div className="w-[429px] h-[0px] left-[1410px] top-[989px] absolute border border-zinc-100"></div>
      <div className="w-[429px] h-[0px] left-[1410px] top-[897px] absolute border border-zinc-100"></div>
      <div className="w-[976px] h-[0px] left-[1374px] top-[104px] absolute origin-top-left rotate-90 border border-zinc-100"></div>
      <div className="w-[225px] h-14 left-[485px] top-[24px] absolute bg-zinc-100 rounded-lg border border-stone-300" />
      <div className="w-[565px] h-14 left-[751px] top-[24px] absolute bg-zinc-100 rounded-lg border border-stone-300" />
      <div className="w-[225px] h-14 left-[1614px] top-[24px] absolute bg-zinc-100 rounded-lg border border-stone-300" />
      <div className="w-[429px] h-14 left-[1410px] top-[530px] absolute bg-zinc-100 rounded-lg border border-stone-300" />
      <div className="w-[429px] h-[92px] left-[1410px] top-[255px] absolute bg-indigo-800 rounded-lg" />
      <div className="w-[55px] h-[0px] left-[654px] top-[25px] absolute origin-top-left rotate-90 border border-stone-300"></div>
      <div className="left-[1662px] top-[42px] absolute text-indigo-800 text-base font-semibold font-['Outfit'] uppercase tracking-wide">
        + Add project
      </div>
      <div className="left-[1169px] top-[131px] absolute text-indigo-800 text-base font-semibold font-['Outfit'] uppercase tracking-wide">
        view full sheet
      </div>
      <div className="left-[1560px] top-[548px] absolute text-indigo-800 text-base font-semibold font-['Outfit'] uppercase tracking-wide">
        EXPORt as pdf
      </div>
      <div className="left-[541px] top-[42px] absolute text-black text-base font-normal font-['Outfit']">
        Task list
      </div>
      <div className="left-[777px] top-[42px] absolute text-stone-300 text-base font-normal font-['Outfit']">
        Search...
      </div>
      <div className="left-[483px] top-[178px] absolute text-black text-base font-normal font-['Outfit']">
        Project name
      </div>
      <div className="left-[140px] top-[178px] absolute text-white text-base font-normal font-['Outfit']">
        Dashboard
      </div>
      <div className="left-[135px] top-[73px] absolute text-white text-base font-normal font-['Outfit']">
        React JS Test
      </div>
      <div className="left-[140px] top-[453px] absolute text-neutral-400 text-base font-normal font-['Outfit']">
        To Do
      </div>
      <div className="left-[140px] top-[230px] absolute text-neutral-400 text-base font-normal font-['Outfit']">
        Activity
      </div>
      <div className="left-[140px] top-[505px] absolute text-neutral-400 text-base font-normal font-['Outfit']">
        Report
      </div>
      <div className="left-[140px] top-[282px] absolute text-neutral-400 text-base font-normal font-['Outfit']">
        Timesheet
      </div>
      <div className="left-[140px] top-[557px] absolute text-neutral-400 text-base font-normal font-['Outfit']">
        Projects
      </div>
      <div className="left-[140px] top-[697px] absolute text-white text-base font-normal font-['Outfit']">
        Help
      </div>
      <div className="left-[81px] top-[1002px] absolute text-white text-base font-normal font-['Outfit']">
        Log out
      </div>
      <div className="left-[242px] top-[1002px] absolute text-white text-base font-normal font-['Outfit']">
        Settings
      </div>
      <div className="left-[738px] top-[178px] absolute text-black text-base font-normal font-['Outfit']">
        Date
      </div>
      <div className="left-[880px] top-[178px] absolute text-black text-base font-normal font-['Outfit']">
        Start time
      </div>
      <div className="left-[1012px] top-[178px] absolute text-black text-base font-normal font-['Outfit']">
        End time
      </div>
      <div className="left-[1152px] top-[178px] absolute text-black text-base font-normal font-['Outfit']">
        Duration
      </div>
      <div className="left-[483px] top-[126px] absolute text-black text-2xl font-semibold font-['Outfit']">
        Timesheet
      </div>
      <div className="left-[483px] top-[664px] absolute text-black text-2xl font-semibold font-['Outfit']">
        To do lists
      </div>
      <div className="left-[1410px] top-[664px] absolute text-black text-2xl font-semibold font-['Outfit']">
        Screenshots
      </div>
      <div className="left-[1410px] top-[126px] absolute text-black text-2xl font-semibold font-['Outfit']">
        Report
      </div>
      <div className="w-[429px] h-[92px] left-[1410px] top-[368px] absolute bg-zinc-100 rounded-lg border border-stone-300" />
      <div className="w-[69px] h-[69px] left-[1421px] top-[379px] absolute bg-white rounded-[5px] border border-stone-300" />
      <div className="w-[772px] h-[67px] left-[549px] top-[736px] absolute bg-white rounded-lg shadow border border-stone-300" />
      <div className="w-[772px] h-[67px] left-[549px] top-[826px] absolute bg-zinc-100 rounded-lg border border-stone-300" />
      <div className="w-[54px] h-[54px] left-[1407px] top-[743px] absolute bg-zinc-100 rounded-lg border border-stone-300" />
      <div className="w-[54px] h-[54px] left-[1410px] top-[833px] absolute bg-zinc-100 rounded-lg border border-stone-300" />
      <div className="w-[54px] h-[54px] left-[1410px] top-[926px] absolute bg-zinc-100 rounded-lg border border-stone-300" />
      <div className="w-[836px] h-[67px] left-[480px] top-[222px] absolute bg-zinc-100 rounded-lg" />
      <div className="w-[836px] h-[67px] left-[480px] top-[353px] absolute bg-zinc-100 rounded-lg" />
      <div className="w-[836px] h-[67px] left-[480px] top-[487px] absolute bg-zinc-100 rounded-lg" />
      <div className="w-[55px] h-[55px] left-[491px] top-[228px] absolute bg-white rounded-lg border border-stone-300" />
      <div className="w-[55px] h-[55px] left-[491px] top-[294px] absolute bg-white rounded-lg border border-stone-300" />
      <div className="w-[55px] h-[55px] left-[491px] top-[359px] absolute bg-white rounded-lg border border-stone-300" />
      <div className="w-[55px] h-[55px] left-[491px] top-[426px] absolute bg-white rounded-lg border border-stone-300" />
      <div className="w-[55px] h-[55px] left-[491px] top-[493px] absolute bg-white rounded-lg border border-stone-300" />
      <div className="w-[772px] h-[67px] left-[549px] top-[919px] absolute bg-zinc-100 rounded-lg border border-stone-300" />
      <div className="left-[483px] top-[728px] absolute text-indigo-800 text-[40px] font-bold font-['Outfit']">
        10
      </div>
      <div className="left-[483px] top-[821px] absolute text-stone-300 text-[40px] font-bold font-['Outfit']">
        11
      </div>
      <div className="left-[483px] top-[911px] absolute text-stone-300 text-[40px] font-bold font-['Outfit']">
        12
      </div>
      <div className="left-[483px] top-[773px] absolute text-indigo-800 text-2xl font-semibold font-['Outfit']">
        May
      </div>
      <div className="left-[483px] top-[866px] absolute text-stone-300 text-2xl font-semibold font-['Outfit']">
        May
      </div>
      <div className="left-[483px] top-[956px] absolute text-stone-300 text-2xl font-semibold font-['Outfit']">
        May
      </div>
      <div className="w-[69px] h-[69px] left-[1421px] top-[266px] absolute bg-zinc-100/opacity-30 rounded-[5px]" />
      <div className="w-[47px] h-[27px] left-[1781px] top-[266px] absolute bg-green-500 rounded-sm" />
      <div className="w-[47px] h-[27px] left-[1781px] top-[379px] absolute bg-amber-400 rounded-sm" />
      <div className="left-[1791px] top-[271px] absolute text-white text-[13px] font-bold font-['Outfit']">
        +17%
      </div>
      <div className="left-[1791px] top-[384px] absolute text-white text-[13px] font-bold font-['Outfit']">
        -10%
      </div>
      <div className="left-[1506px] top-[276px] absolute text-stone-300 text-base font-semibold font-['Outfit'] uppercase tracking-wide">
        Weekly activity
      </div>
      <div className="left-[1506px] top-[387px] absolute text-indigo-800 text-base font-semibold font-['Outfit'] uppercase tracking-wide">
        Time spent this week
      </div>
      <div className="left-[1506px] top-[297px] absolute text-white text-2xl font-semibold font-['Outfit']">
        75%
      </div>
      <div className="left-[1506px] top-[408px] absolute text-neutral-900 text-2xl font-semibold font-['Outfit']">
        30:25:18
      </div>
      <div className="left-[575px] top-[751px] absolute text-black text-base font-normal font-['Outfit']">
        Prototyping in Figma
      </div>
      <div className="left-[1476px] top-[760px] absolute text-black text-base font-normal font-['Outfit']">
        Screenshots-1.png
      </div>
      <div className="left-[1476px] top-[850px] absolute text-black text-base font-normal font-['Outfit']">
        Screenshots-3.png
      </div>
      <div className="left-[1476px] top-[943px] absolute text-black text-base font-normal font-['Outfit']">
        Screenshots-4.png
      </div>
      <div className="left-[555px] top-[245px] absolute text-black text-base font-normal font-['Outfit']">
        Prototyping in Figma
      </div>
      <div className="left-[555px] top-[311px] absolute text-black text-base font-normal font-['Outfit']">
        Prototyping in Figma
      </div>
      <div className="left-[555px] top-[376px] absolute text-black text-base font-normal font-['Outfit']">
        Prototyping in Figma
      </div>
      <div className="left-[555px] top-[443px] absolute text-black text-base font-normal font-['Outfit']">
        Prototyping in Figma
      </div>
      <div className="left-[555px] top-[510px] absolute text-black text-base font-normal font-['Outfit']">
        Prototyping in Figma
      </div>
      <div className="left-[738px] top-[245px] absolute text-black text-base font-normal font-['Outfit']">
        20/05/2024
      </div>
      <div className="left-[738px] top-[311px] absolute text-black text-base font-normal font-['Outfit']">
        20/05/2024
      </div>
      <div className="left-[738px] top-[376px] absolute text-black text-base font-normal font-['Outfit']">
        20/05/2024
      </div>
      <div className="left-[738px] top-[443px] absolute text-black text-base font-normal font-['Outfit']">
        20/05/2024
      </div>
      <div className="left-[738px] top-[510px] absolute text-black text-base font-normal font-['Outfit']">
        20/05/2024
      </div>
      <div className="left-[880px] top-[245px] absolute text-black text-base font-normal font-['Outfit']">
        08:30:25
      </div>
      <div className="left-[880px] top-[311px] absolute text-black text-base font-normal font-['Outfit']">
        08:30:25
      </div>
      <div className="left-[880px] top-[376px] absolute text-black text-base font-normal font-['Outfit']">
        08:30:25
      </div>
      <div className="left-[880px] top-[443px] absolute text-black text-base font-normal font-['Outfit']">
        08:30:25
      </div>
      <div className="left-[880px] top-[510px] absolute text-black text-base font-normal font-['Outfit']">
        08:30:25
      </div>
      <div className="left-[1012px] top-[245px] absolute text-black text-base font-normal font-['Outfit']">
        18:11:40
      </div>
      <div className="left-[1012px] top-[311px] absolute text-black text-base font-normal font-['Outfit']">
        18:11:40
      </div>
      <div className="left-[1012px] top-[376px] absolute text-black text-base font-normal font-['Outfit']">
        18:11:40
      </div>
      <div className="left-[1012px] top-[443px] absolute text-black text-base font-normal font-['Outfit']">
        18:11:40
      </div>
      <div className="left-[1012px] top-[510px] absolute text-black text-base font-normal font-['Outfit']">
        18:11:40
      </div>
      <div className="left-[1150px] top-[245px] absolute text-black text-base font-normal font-['Outfit']">
        08:19:40
      </div>
      <div className="left-[1150px] top-[311px] absolute text-black text-base font-normal font-['Outfit']">
        08:19:40
      </div>
      <div className="left-[1150px] top-[376px] absolute text-black text-base font-normal font-['Outfit']">
        08:19:40
      </div>
      <div className="left-[1150px] top-[443px] absolute text-black text-base font-normal font-['Outfit']">
        08:19:40
      </div>
      <div className="left-[1150px] top-[510px] absolute text-black text-base font-normal font-['Outfit']">
        08:19:40
      </div>
      <div className="left-[1229px] top-[760px] absolute text-neutral-900 text-base font-normal font-['Outfit'] underline">
        Details
      </div>
      <div className="left-[1804px] top-[760px] absolute text-indigo-800 text-base font-normal font-['Outfit'] underline">
        View
      </div>
      <div className="left-[1803px] top-[850px] absolute text-indigo-800 text-base font-normal font-['Outfit'] underline">
        View
      </div>
      <div className="left-[1803px] top-[943px] absolute text-indigo-800 text-base font-normal font-['Outfit'] underline">
        View
      </div>
      <div className="left-[1230px] top-[850px] absolute text-neutral-900 text-base font-normal font-['Outfit'] underline">
        Details
      </div>
      <div className="left-[1229px] top-[943px] absolute text-neutral-900 text-base font-normal font-['Outfit'] underline">
        Details
      </div>
      <div className="left-[575px] top-[841px] absolute text-black text-base font-normal font-['Outfit']">
        Prototyping in Adobe XD
      </div>
      <div className="left-[575px] top-[932px] absolute text-black text-base font-normal font-['Outfit']">
        Prototyping in Sketch
      </div>
      <div className="left-[575px] top-[769px] absolute text-stone-300 text-base font-normal font-['Outfit']">
        Today
      </div>
      <div className="left-[575px] top-[859px] absolute text-stone-300 text-base font-normal font-['Outfit']">
        Upcoming
      </div>
      <div className="left-[575px] top-[950px] absolute text-stone-300 text-base font-normal font-['Outfit']">
        Upcoming
      </div>
      <div className="left-[514px] top-[240px] absolute text-indigo-800 text-2xl font-semibold font-['Outfit']">
        1
      </div>
      <div className="left-[511px] top-[306px] absolute text-amber-400 text-2xl font-semibold font-['Outfit']">
        2
      </div>
      <div className="left-[511px] top-[371px] absolute text-green-500 text-2xl font-semibold font-['Outfit']">
        3
      </div>
      <div className="left-[511px] top-[438px] absolute text-indigo-800 text-2xl font-semibold font-['Outfit']">
        4
      </div>
      <div className="left-[511px] top-[505px] absolute text-amber-400 text-2xl font-semibold font-['Outfit']">
        5
      </div>
      <div className="w-[404px] h-[0px] left-[727px] top-[182px] absolute origin-top-left rotate-90 border border-zinc-100"></div>
      <div className="w-[404px] h-[0px] left-[869px] top-[182px] absolute origin-top-left rotate-90 border border-zinc-100"></div>
      <div className="w-[404px] h-[0px] left-[995px] top-[182px] absolute origin-top-left rotate-90 border border-zinc-100"></div>
      <div className="w-[404px] h-[0px] left-[1132px] top-[184px] absolute origin-top-left rotate-90 border border-zinc-100"></div>
      <img
        className="w-[35px] h-[35px] left-[29px] top-[994px] absolute rounded-[66px]"
        src="https://via.placeholder.com/35x35"
      />
      <div className="w-[25px] h-[25px] left-[211px] top-[999px] absolute justify-center items-center inline-flex">
        <div className="w-[25px] h-[25px] relative"></div>
      </div>
      <img
        className="w-[42px] h-[42px] left-[80px] top-[62px] absolute"
        src="https://via.placeholder.com/42x42"
      />
    </div>*/

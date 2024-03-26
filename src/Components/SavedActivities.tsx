import { useState } from "react"
import { bars, xMark } from "../assets/svgs/sideBar"
import SavedActivityCard from "./SavedActivityCard"
import AplicationEnterCards from "./AplicationEnterCards"

interface PropTypes {
  activityTest : ActivityType
}

export default function SavedActivities({
  activityTest
} : PropTypes) {
  const [isIn, setIsIn] = useState(true)

  const comp = []

  for (let i = 0; i < 7; ++i) {
    comp.push(<SavedActivityCard key={i} activity={activityTest} />)
  }

  return <>
    <div 
      className="h-full w-3/4 md:w-1/3 p-4 pt-14 absolute rounded-l-md right-0 top-0 transition-all duration-700 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      style={{ transform: (isIn)? "translateX(+100%)" : "translateX(+1%)" }}>

      <div className="h-full w-full overflow-y-auto flex flex-col gap-4">
        { (true) 
          ? <AplicationEnterCards />
          : comp 
        }
      </div>

      <div className="absolute -left-14 top-14">
        <button onClick={() => setIsIn(value => !value)} className="relative group w-[50px] h-[50px] bg-slate-700 ring-0 ring-gray-300 transition-all duration-500 hover:ring-4 rounded-full flex justify-center items-center">
          { isIn ? bars : xMark }
        </button>
      </div>
    </div>
  </>
}
import { spinner } from "../assets/svgs/spinner";

interface PropTypes {
  activity : ActivityType;
  loading : boolean;
}

export default function ActivityCard ({
  activity,
  loading
} : PropTypes) {

  const link = (activity.link === "")
    ? "https://www.google.com/search?q=" + activity.activity.split(" ").join("+")
    : activity.link
  
  const price = (activity.price * 100) + "~"

  const accesibilityColor = (activity.accessibility < 0.3)
    ? "red"
    : (activity.accessibility < 0.6)
      ? "yellow"
      : "green"
    
  const participants = (activity.participants === 1)
    ? "You"
    : "You and " + (activity.participants - 1) + " friends"

  return <>
    <div className="w-full h-full flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 top-30 sm:top-auto dark:bg-gray-800 dark:border-gray-700 absolute">
        <div className="h-full w-full absolute opacity-30 left-0 top-0 z-0" style={{backgroundImage:`linear-gradient(to top left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%), url(${loading ? "" : activity.image})`}}></div>
        <h5 className="mb-4 text-xl font-medium text-black dark:text-white relative"> 
          { (loading) ? "Loading" : activity.activity} 
        </h5>

        {
          loading && 
          <div className="">
            { spinner }
          </div>
        }
        {
          !loading && <>
          <div className="flex items-baseline text-gray-900 dark:text-white relative">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">{price}</span>
          </div>

          <ul role="list" className="space-y-5 my-7 relative">
            <li>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Participants: {participants}</span>
            </li>

            <li>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{"This is a " + activity.type + " activity"}</span>
            </li>

            <li>
              <div className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 mb-2">
                Difficulty
              </div>
              <div className="mb-6 h-2 w-full bg-neutral-200 dark:bg-neutral-600">
                <div className="h-full bg-white transition-all duration-500" style={{width: `${(1 - activity.accessibility)*100}%`, background: accesibilityColor }}></div>
              </div>
            </li>
          </ul>

          <a target="_blank" href={link} type="button" className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center relative">
            Begin
          </a>

          <button disabled={true} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center relative disabled:bg-slate-900 disabled:hover:bg-slate-900 disabled:text-gray-600">
            { (true) ? "Login to Save" : "Save" }
          </button>
          </>
        }
      </div>
    </div>
  </>
}
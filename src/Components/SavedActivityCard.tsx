interface PropTypes {
  activity : ActivityType
}

export default function SavedActivityCard({
  activity
} : PropTypes) {

  const link = (activity.link === "")
    ? "https://www.google.com/search?q=" + activity.activity.split(" ").join("+")
    : activity.link

  const accesibilityColor = (activity.accessibility < 0.3)
    ? "red"
    : (activity.accessibility < 0.6)
      ? "yellow"
      : "green"

  return <>
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ activity.activity }</h5>

      <div className="mb-6 h-2 w-full bg-neutral-200 dark:bg-neutral-600">
        <div className="h-full bg-white transition-all duration-500" style={{width: `${(1 - activity.accessibility)*100}%`, background: accesibilityColor }}></div>
      </div>

      <a target="_blank" href={link} type="button" className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center relative">
        Begin
      </a>
    </div>
  </>
}
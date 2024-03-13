interface PropTypes {
  handleChangeVisibility : () => void
}

export default function SignInCard({
  handleChangeVisibility
} : PropTypes) {
  return <>
    <form className="space-y-6 w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 top-30 sm:top-auto dark:bg-gray-900 dark:border-gray-800">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign In</h5>

        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>

        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>

        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Sign Me In
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already Has Account? <a onClick={handleChangeVisibility} className="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">Go to Login</a>
        </div>
    </form>
  </>
}
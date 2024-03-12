import { useState } from "react"
import { arrowDown, arrowUp } from "../assets/svgs/arrows"
import useFilters from "../Hooks/useFilters"

interface PropTypes {
  newActivity: (filters: FilterType) => void
}

export default function Filters({
  newActivity
} : PropTypes) {
  const [isIn, setIsIn] = useState(true)
  const {filters, handleChangeDifficulty, handleChangeMaxPrice, handleChangeMinPrice, handleChangeParticipants, handleChangeType} = useFilters({
    maxAccesibility:1,
    maxPrice:1,
    minAccesibility:0,
    minPrice:0,
    participants:-1,
    type:""
  })

  return <>
    <form 
      onSubmit={(event) => event.preventDefault()}
      className="absolute p-5 transition-all duration-500 w-full h-20 flex justify-center items-center gap-8 rounded-b-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 "
      style={{ top: (isIn)? "-5rem" : "-1px" }}
    >
      <select 
        value={filters.type}
        onChange={handleChangeType}
        id="countries" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="" selected>Random</option>
        <option value="education">Education</option>
        <option value="recreational">Recreational</option>
        <option value="social">Social</option>
        <option value="diy">DIY</option>
        <option value="charity">Charity</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="music">Music</option>
        <option value="busywork">Busywork</option>
      </select>

      <div className="w-full">
        <label className="block w-full text-center font-medium text-black dark:text-white"> minPrice: { Math.round(filters.minPrice * 100) } $ </label>
        <input 
          value={ filters.minPrice }
          onChange={handleChangeMinPrice} 
          type="range" 
          step="0.01" 
          min="0" 
          max="1" 
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
      </div>

      <div className="w-full">
        <label className="block w-full text-center font-medium text-black dark:text-white"> maxPrice: { Math.round(filters.maxPrice * 100) } $ </label>
        <input 
          value={ filters.maxPrice }
          onChange={handleChangeMaxPrice} 
          type="range" 
          step="0.01" 
          min="0" 
          max="1" 
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
      </div>

      <select 
        onChange={handleChangeDifficulty}
        id="countries" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="" selected>Random</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <select 
        onChange={handleChangeParticipants}
        id="countries" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="-1">Random</option>
        <option value="1">Only You</option>
        <option value="2">2 Persons</option>
        <option value="3">3 Persons</option>
        <option value="4">4 Persons</option>
        <option value="5">5 Persons</option>
      </select>

      <span className="absolute -bottom-11">
        <button
          onClick={() => setIsIn(value => !value)} 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center">
          { isIn ? arrowDown : arrowUp }
        </button>

        <button
          onClick={() => newActivity(filters)} 
          className="text-white bg-blue-700 mr-5 ml-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center">
          NEW
        </button>

        <button
          onClick={() => setIsIn(value => !value)} 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center">
          { isIn ? arrowDown : arrowUp }
        </button>
      </span>
    </form>
  </>
}
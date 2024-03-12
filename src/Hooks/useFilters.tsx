import { ChangeEvent, useState } from "react"

export default function useFilters( initialState : FilterType ) {
  const [filters, setFilters] = useState<FilterType>(initialState)

  const handleChangeType = (event : ChangeEvent<HTMLSelectElement>) => {
    setFilters({...filters, type: event.target.value})
  }

  const handleChangeMinPrice = (event : ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value)
    setFilters(lastValue => {
      return {...filters, minPrice: value, maxPrice: (lastValue.maxPrice < value) ? value : lastValue.maxPrice}
    })
  }

  const handleChangeMaxPrice = (event : ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value)
    setFilters(lastValue => {
      return {...filters, maxPrice: value, minPrice: (lastValue.minPrice > value) ? value : lastValue.minPrice}
    })
  }

  const handleChangeDifficulty = (event : ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    const [minDif, maxDif] = (value === "easy")
      ? [0.6, 1]
      : (value === "medium")
        ? [0.3, 0.6]
        : (value === "hard")
          ? [0, 0.3]
          : [0, 1]

    setFilters({...filters, minAccesibility: minDif, maxAccesibility: maxDif})
  }

  const handleChangeParticipants = (event : ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value)
    setFilters({...filters, participants: value})
  }

  return {filters, handleChangeType, handleChangeDifficulty, handleChangeMaxPrice, handleChangeMinPrice, handleChangeParticipants}
}
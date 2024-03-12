import { useEffect, useState } from "react";
import { GetActivity } from "../Services/ActivityService";

export default function useActivity( initialState : ActivityType ) {
  const filters = {
    maxAccesibility: -1,
    minAccesibility: -1,
    maxPrice: -1,
    minPrice: -1,
    participants: -1,
    type: ""
  }

  const [activity, SetActivity] = useState<ActivityType>(initialState)

  const getActivity = async ( filters : FilterType ) => {
    const newActivity = await GetActivity(filters)
    SetActivity(newActivity)
  }

  useEffect(() => {
    getActivity(filters)
  }, [])
  
  return {activity, getActivity}
}
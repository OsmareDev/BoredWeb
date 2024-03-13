import { useState } from "react";
import ActivityCard from "../Components/ActivityCard";
import Filters from "../Components/Filters";
import SavedActivities from "../Components/SavedActivities";
import useActivity from "../Hooks/useActivity";

export default function MainPage() {
  const { activity, getActivity, loading } = useActivity({
    activity: "Loading Activity",
    accessibility: 0,
    key: "",
    link: "",
    participants: -1,
    price: -1,
    type: ""
  })


  return <>
    <Filters newActivity={getActivity}/>
    <ActivityCard activity={activity} loading={loading}/>
    <SavedActivities activityTest={activity}/>
  </>
}
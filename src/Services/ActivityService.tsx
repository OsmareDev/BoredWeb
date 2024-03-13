import { GetImage } from "./GoogleImageService"

const BASE_URL = "https://www.boredapi.com/api/activity"

const noResult : ActivityType = {
  activity:"No Activity Found",
  type:"unknown",
  participants: 1,
  price: 0,
  link:"",
  key:"-1",
  accessibility: 1
}

const GetActivity = async ( filters : FilterType ) => {
  let url = BASE_URL + "?" 
  url += (filters.type !== "") ? "type="+filters.type : ""
  url += (filters.participants !== -1) ? "&participants="+filters.participants : ""
  url += (filters.minPrice !== -1) ? "&minprice="+filters.minPrice : ""
  url += (filters.maxPrice !== -1) ? "&maxprice="+filters.maxPrice : ""
  url += (filters.minAccesibility !== -1) ? "&minaccessibility="+filters.minAccesibility : ""
  url += (filters.maxAccesibility !== -1) ? "&maxaccessibility="+filters.maxAccesibility : ""

  try {
    const data = await window.fetch(url)
    const json : ActivityType = await data.json() 
    
    const result : ActivityType = (json.key)
      ? json
      : noResult

    result.image = await GetImage()
    return result
  } catch (error) {
    console.log("Error getting data: " + error)
    throw error;
  }
}

export { GetActivity }
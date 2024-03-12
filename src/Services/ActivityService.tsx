import { GetImage } from "./GoogleImageService"

const BASE_URL = "https://www.boredapi.com/api/activity"

const Result : ActivityType = {
  activity:"Volunteer at your local food pantry",
  type:"charity",
  participants:1,
  price:0,
  link:"",
  key:"1878070",
  accessibility:0.1
}

const GetActivity = async ( filters : FilterType ) => {
  let url = BASE_URL + "?" 
  url += (filters.type !== "") ? "type="+filters.type : ""
  url += (filters.participants !== -1) ? "&participants="+filters.participants : ""
  url += (filters.minPrice !== -1) ? "&minprice="+filters.minPrice : ""
  url += (filters.maxPrice !== -1) ? "&maxprice="+filters.maxPrice : ""
  url += (filters.minAccesibility !== -1) ? "&minaccessibility="+filters.minAccesibility : ""
  url += (filters.maxAccesibility !== -1) ? "&maxaccessibility="+filters.maxAccesibility : ""

  console.log(url)

  try {
    const data = await window.fetch(url)
    const json : ActivityType = await data.json() 
    json.image = await GetImage()
    return json
  } catch (error) {
    console.log("Error getting data: " + error)
    throw error;
  }
}

export { GetActivity }
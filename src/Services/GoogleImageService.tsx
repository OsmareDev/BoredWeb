const BASE_URL = "https://picsum.photos/384/380"

const GetImage = async () => {
  const response = await window.fetch(BASE_URL)
  return response.url
}

export { GetImage }
import axios from 'axios'

export const getAllTrending = async () => {
    const response = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=f2e7d342abc71332089fd0b6fdbaa86d")
    return response.data
}
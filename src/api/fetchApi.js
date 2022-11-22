import axios from "axios";
const baseUrl=process.env.REACT_APP_BASE_URL;
const apikey=process.env.REACT_APP_API_KEY;
export const fetchCityWeather=async(city)=>{
    const response=await axios.get(baseUrl,{
        params:{
        q:city,
        units:"metric",
        appid:apikey,
        lang:"fa"
    }}).catch((error)=>{
        return error.response
    });
    console.log(response);
    return response.data;
}
import axios from "axios";

const KEY = "AIzaSyCDrxd48Is9FBCkSz1Ws9xlHEensCuuTVY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 35,
        key: KEY,
    },
})
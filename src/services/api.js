import axios from 'axios'

const URL = process.env.VUE_APP_API_URL;
const USER_ID = process.env.VUE_APP_USER_ID;
const Key = process.env.VUE_APP_API_KEY;

class Api {
    async GetThumbnail() {
        var response = await axios.get(`${URL}${USER_ID}/posts?key=${Key}&maxResults=100`);
        return response.data;
    } 

    async GetArticle(articleId) {
        var response = await axios.get(`${URL}${USER_ID}/posts/${articleId}?key=${Key}`);
        return response.data;
    }
}

const api = new Api();
export default api;
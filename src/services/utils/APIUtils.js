import axios from "axios";

const baseUrl = "https://raw.githubusercontent.com/akshita151199/APIs/main/data";

const headers = {};
headers['Content-Type'] = 'application/json;charset=UTF-8';
// headers['Content-Type'] = 'text/html; charset=utf-8';
headers['Access-Control-Allow-Origin'] = "*";
// headers['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept";

export const FETCH = async () => {
    const url = baseUrl
    const response = await axios.get(url, { headers: headers });
    return response;
}
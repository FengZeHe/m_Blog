import axios from "axios";
import showMessage from "../utils/showMessage";

const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {
        console.log(resp.data.data);
    }
    console.log(resp)
    // return resp.data.data;
});


export default ins;

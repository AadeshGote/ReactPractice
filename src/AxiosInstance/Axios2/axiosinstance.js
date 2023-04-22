import axios from "axios";

let axiosInstance = axios.create({
    baseURL:"http://localhost:4000"
})

export default axiosInstance
//json server CLI command compulsory:--npx json-server --watch db.json  --port 4000
//Run this command along with npm start but in different terminal total 2 terminal.
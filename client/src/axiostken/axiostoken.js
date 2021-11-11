import axios from "axios";
  

const setaxiostoken = (token) => {
    if (token) {
    console.log(token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setaxiostoken
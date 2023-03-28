import axios from "axios";




const instance = axios.create({
    baseURL:"https://react-redux-masoud-default-rtdb.firebaseio.com/"
})

export default instance
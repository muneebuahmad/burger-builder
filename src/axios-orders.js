import axios from "axios";

const instance = axios.create({
	baseURL: "https://burger-builder-react-75a8f.firebaseio.com/",
});

export default instance;

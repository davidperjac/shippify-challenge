import axios from 'axios';
// import queryString from 'query-string';

const baseURL = 'http://localhost:3000/api/v1/';

const axiosClient = axios.create({
	baseURL: baseURL,
	// paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) return response.data;
		return response;
	},
	(err) => {
		if (!err.response) {
			return alert(err);
		}
		throw err.response;
	}
);

export default axiosClient;

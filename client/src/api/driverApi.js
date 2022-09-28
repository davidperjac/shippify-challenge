import axiosClient from './axiosClient';

const driverApi = {
	getAllDrivers: (activePage) => axiosClient.get(`driver/${activePage}`),
};

export default driverApi;

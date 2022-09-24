import axiosClient from './axiosClient';

const driverApi = {
	getAllDrivers: () => axiosClient.get('driver'),
};

export default driverApi;

import axiosClient from './axiosClient';

const vehicleApi = {
	getAllVehicles: () => axiosClient.get('vehicle'),
	getDriverVehicles: (params, driverId) =>
		axiosClient.get(`vehicle/${driverId}`, params),
	createVehicle: (params) => axiosClient.post('vehicle', params),
	updateVehicle: (params, vehicleId) =>
		axiosClient.put(`vehicle/${vehicleId}`, params),
	deleteVehicle: (params, vehicleId) =>
		axiosClient.delete(`vehicle/${vehicleId}`, params),
};

export default vehicleApi;

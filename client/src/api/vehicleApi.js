import axiosClient from './axiosClient';

const vehicleApi = {
	getAllVehicles: () => axiosClient.get('vehicle'),
	getVehicle: (vehicleId) => axiosClient.get(`vehicle/${vehicleId}`),
	createVehicle: (params) => axiosClient.post('vehicle', params),
	updateVehicle: (params, vehicleId) =>
		axiosClient.put(`vehicle/${vehicleId}`, params),
	deleteVehicle: (vehicleId) => axiosClient.delete(`vehicle/${vehicleId}`),
};

export default vehicleApi;

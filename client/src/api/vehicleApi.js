import axiosClient from './axiosClient';

const vehicleApi = {
	getVehiclesByDriver: (driverId) => axiosClient.get(`vehicle/${driverId}`),
	createVehicle: (params) => axiosClient.post('vehicle', params),
	updateVehicle: (params, vehicleId) =>
		axiosClient.put(`vehicle/${vehicleId}`, params),
	deleteVehicle: (vehicleId) => axiosClient.delete(`vehicle/${vehicleId}`),
};

export default vehicleApi;

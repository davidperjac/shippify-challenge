import axiosClient from './axiosClient';

const vehicleApi = {
	getVehiclesByPage: (activePage) => axiosClient.get(`vehicle/${activePage}`),
	createVehicle: (params) => axiosClient.post('vehicle', params),
	updateVehicle: (params, vehicleId) =>
		axiosClient.put(`vehicle/${vehicleId}`, params),
	deleteVehicle: (vehicleId) => axiosClient.delete(`vehicle/${vehicleId}`),
};

export default vehicleApi;

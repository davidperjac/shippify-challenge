import { useFormVehicle } from '../hooks/useFormVehicle';
import FormLayout from './FormLayout';

const AddForm = ({ setOpened }) => {
	const { form, handleAddSubmit } = useFormVehicle(setOpened);

	return <FormLayout form={form} handleSubmit={handleAddSubmit} />;
};

export default AddForm;

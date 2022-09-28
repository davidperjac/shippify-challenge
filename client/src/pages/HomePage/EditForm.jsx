import { useFormVehicle } from '../../hooks/useFormVehicle';
import FormLayout from '../../components/FormLayout';
import { useEditForm } from '../../hooks/useEditForm';

const EditForm = ({ id, setOpened }) => {
	const { form, handleEditSubmit } = useFormVehicle(setOpened, id);
	useEditForm(form, id);

	return <FormLayout form={form} handleSubmit={handleEditSubmit} />;
};

export default EditForm;

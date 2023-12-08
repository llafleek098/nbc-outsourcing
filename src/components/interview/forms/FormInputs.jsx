import { useInterviewForm } from '../../../contexts/interview.context';
import FormAges from './FormAges';
import FormGender from './FormGender';
import FormProduct from './FormProduct';

const FormInputs = () => {
  const { page } = useInterviewForm();

  const display = {
    0: <FormAges />,
    1: <FormGender />,
    2: <FormProduct />
  };
  return display[page];
};
export default FormInputs;

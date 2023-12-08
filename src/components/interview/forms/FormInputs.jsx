import { useInterviewForm } from '../../../contexts/interview.context';
import FormContentWrapper from './FormPage';
import { pagesData } from './form.data';

const FormInputs = () => {
  const { page } = useInterviewForm();

  return (
    <FormContentWrapper title={pagesData[page].title}>
      {pagesData[page].component}
    </FormContentWrapper>
  );
};
export default FormInputs;

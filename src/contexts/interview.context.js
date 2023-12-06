import { createContext, useContext, useState } from 'react';
import useInterview from '../hooks/useInterview';

const initialState = {
  ages: '10ages',
  gender: 'male',
  product: '',
  category: '',
  handleSubmit: (e) => {},
  handleChange: (e) => {}
};
const InterviewContext = createContext(initialState);

export default function InterviewFormProvider({ children }) {
  const [ages, setAges] = useState('10ages');
  const [gender, setGender] = useState('male');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('선택해주세요');

  const { interviews, mutation } = useInterview();

  const setters = {
    ages: setAges,
    gender: setGender,
    product: setProductName,
    category: setCategory
  };

  const handleChange = (e) => {
    setters[e.currentTarget.name](e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ ages, gender, productName, category });
  };

  const value = {
    ages,
    gender,
    productName,
    category,
    handleSubmit,
    handleChange,
    interviews
  };

  return (
    <InterviewContext.Provider value={value}>
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterviewForm() {
  return useContext(InterviewContext);
}

import { createContext, useContext, useState } from 'react';

const initialState = {
  ages: '10ages',
  gender: 'male',
  product: '',
  category: '',
  handleSubmit: (e) => {},
  handleChange: (e) => {}
};
const InterviewContext = createContext(initialState);

export default function InterviewProvider({ children }) {
  const [ages, setAges] = useState('10ages');
  const [gender, setGender] = useState('male');
  const [product, setProduct] = useState('');
  const [category, setCategory] = useState('선택해주세요');

  const setters = {
    age: setAges,
    gender: setGender,
    product: setProduct,
    category: setCategory
  };

  const handleChange = (e) => {
    setters[e.currentTarget.name](e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const value = {
    ages,
    gender,
    product,
    category,
    handleSubmit,
    handleChange
  };

  return (
    <InterviewContext.Provider value={value}>
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterview() {
  return useContext(InterviewContext);
}

import { createContext, useContext, useState } from 'react';

const initialState = {
  ages: '10ages',
  gender: 'male',
  product: '아메리카노',
  category: '커피',
  handleSubmit: (e) => {},
  handleChange: (e) => {}
};
const InterviewContext = createContext(initialState);

export default function InterviewProvider({ children }) {
  const [ages, setAges] = useState('10ages');
  const [gender, setGender] = useState('male');
  const [product, setProduct] = useState('아메리카노');
  const [category, setCategory] = useState('커피');

  const setters = {
    age: setAges,
    gender: setGender,
    product: setProduct,
    category: setCategory
  };

  const handleChange = (e) => {
    setters[e.currentTarget.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ages, gender, product, category });
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

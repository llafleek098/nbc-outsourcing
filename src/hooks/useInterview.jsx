import { useState } from 'react';

function useInterview() {
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
    setters[e.current.target.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    ages,
    gender,
    product,
    category,
    handleSubmit,
    handleChange
  };
}

export default useInterview;

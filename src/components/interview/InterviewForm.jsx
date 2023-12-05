import React from 'react';
import useInterviewForm from '../../hooks/useInterviewForm';
import FormAges from './FormAges';
import FormGender from './FormGender';
import FormProduct from './FormProduct';

function InterviewForm() {
  const { handleSubmit } = useInterviewForm();
  return (
    <form onSubmit={handleSubmit}>
      <FormAges />
      <FormGender />
      <FormProduct />
      <button type="submit">제출</button>
    </form>
  );
}

export default InterviewForm;

import React from 'react';
import { useInterview } from '../../contexts/interview.context';
import FormAges from './FormAges';
import FormGender from './FormGender';
import FormProduct from './FormProduct';

function InterviewForm() {
  const { handleSubmit } = useInterview();
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

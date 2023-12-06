import React from 'react';
import InterviewForm from '../components/interview/InterviewForm';
import InterviewProvider from '../contexts/interview.context';

function InterviewPage() {
  return (
    <InterviewProvider>
      <InterviewForm />
    </InterviewProvider>
  );
}
export default InterviewPage;

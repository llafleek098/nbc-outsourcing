import React from 'react';
import InterviewForm from '../components/interview/InterviewForm';
import InterviewResult from '../components/interview/InterviewResult';
import InterviewProvider from '../contexts/interview.context';

function InterviewPage() {
  return (
    <InterviewProvider>
      <InterviewForm />
      <InterviewResult />
    </InterviewProvider>
  );
}
export default InterviewPage;

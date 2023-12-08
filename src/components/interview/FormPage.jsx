import React from 'react';
import { StFieldSet, StLegend } from './InterviewForm.styles';
function FormContentWrapper({ title, children }) {
  return (
    <StFieldSet>
      <StLegend>{title}</StLegend>
      {children}
    </StFieldSet>
  );
}
export default FormContentWrapper;

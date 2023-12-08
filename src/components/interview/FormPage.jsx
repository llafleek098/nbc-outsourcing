import React from 'react';
import { StFieldSet, StLegend } from './form.styles';
function FormContentWrapper({ title, children }) {
  return (
    <StFieldSet>
      <StLegend>{title}</StLegend>
      {children}
    </StFieldSet>
  );
}
export default FormContentWrapper;

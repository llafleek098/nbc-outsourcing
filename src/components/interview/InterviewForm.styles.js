import styled from 'styled-components';
export const StFieldSet = styled.fieldset`
  border-radius: 1rem;
  position: relative;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StLegend = styled.legend`
  position: absolute;
  top: 2rem;
  margin: 0 auto;
  font-size: 3rem;
`;
export const StRadioInputContainer = styled.ul`
  margin-top: 5rem;
  padding: 1rem;
  width: 100%;
`;
export const StRadioInputWrapper = styled.li`
  cursor: pointer;
  input {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;

  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);

  transition: background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;

  &:hover {
    background-color: var(--primaryColor);
    color: white;
    filter: opacity(0.5);
  }

  color: ${(props) => (props.$checked ? 'white' : 'black')};
  background-color: ${(props) =>
    props.$checked ? 'var(--primaryColor)' : 'var(--secondaryColor)'};

  label {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 4rem;
  }
`;

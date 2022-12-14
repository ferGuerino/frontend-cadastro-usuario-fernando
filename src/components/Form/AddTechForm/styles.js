import styled from "styled-components";

export const TechFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  gap: 16px;

  label {
    color: var(--gray-0);
    font-size: var(--font-size-3);
    font-weight: var(--font-regular);
  }
  input,
  select {
    height: 48px;
    border: 1.22px, solid var(--gray-0);
    border-radius: var(--border-radius-1);
    padding: 0 16px;
    background-color: var(--gray-2);
    font-size: var(--font-size-1);
    color: var(--gray-0);
  }
  .msgError {
    font-size: var(--font-size-3);
    color: var(--color-negative);
  }
  .btnTechForm {
    height: 48px;
    background-color: var(--color-primary);
    font-size: var(--font-size-1);
    margin: 8px 0 16px 0;
  }
`;

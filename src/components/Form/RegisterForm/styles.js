import styled from "styled-components";

export const FormStyled = styled.div`
  background-color: var(--gray-3);
  width: 100%;
  padding: 32px 16px;
  border-radius: var(--border-radius-1);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h3 {
    color: var(--white);
    font-size: var(--font-size-1);
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  label {
    color: var(--gray-0);
    font-size: var(--font-size-3);
  }
  input,
  select {
    height: 48px;
    margin-bottom: 10px;
    border: 1.22px solid var(--gray-0);
    border-radius: var(--border-radius-1);
    background-color: var(--gray-2);
    padding: 16px;
    font-size: var(--font-size-1);
    color: var(--gray-0);
  }
  select {
    font-size: var(--font-size-2);
  }

  button {
    background-color: var(--color-primary);
    height: 48px;
    border-radius: var(--border-radius-1);
    color: var(--white);
    font-size: var(--font-size-1);
  }
  p {
    color: var(--gray-1);
    font-size: var(--font-size-3);
  }
  .errors {
    color: var(--color-negative);
  }
  .btnLink {
  }
`;

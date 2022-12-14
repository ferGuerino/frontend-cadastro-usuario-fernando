import styled from "styled-components";

export const DivModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: var(--color-bg-modal);
`;

export const DivModalBox = styled.div`
  background-color: var(--gray-3);
  width: 100%;
  max-width: 369px;
  border-radius: var(--border-radius-1);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--gray-2);
    padding: 8px 16px;
    border-radius: var(--border-radius-1) var(--border-radius-1) 0 0;
  }
  header > p {
    color: var(--gray-0);
  }
  header > button {
    color: var(--gray-1);
    background-color: transparent;
  }
`;

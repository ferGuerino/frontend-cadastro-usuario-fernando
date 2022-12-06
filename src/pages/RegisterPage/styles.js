import styled from "styled-components";

export const HeaderContent = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btnBack {
    color: var(--gray-0);
    background-color: var(--gray-3);
    height: 40px;
    padding: 0 16px;
    border-radius: var(--border-radius-1);
    display: flex;
    align-items: center;
    font-size: var(--font-size-3);
    font-weight: var(--font-semibold);
  }
`;

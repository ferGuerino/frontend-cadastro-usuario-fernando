import styled from "styled-components";

export const UlTechList = styled.ul`
  margin-top: 24px;
  background-color: var(--gray-2);
  width: 100%;
  padding: 22px;
  border-radius: var(--border-radius-1);
  display: flex;
  flex-direction: column;
  gap: 16px;
  .divLi {
    display: flex;
    justify-content: space-between;
    background-color: #121214;
    padding: 16px;
    border-radius: var(--border-radius-1);
  }
  .divStatus {
    padding: 0 8px;
    display: flex;
    gap: 24px;
  }
  .title {
    color: var(--gray-0);
    font-weight: var(--font-bold);
    font-size: var(--font-size-1);
    cursor: pointer;
  }
  .status {
    color: var(--gray-1);
    font-weight: var(--font-regular);
    font-size: var(--font-size-2);
  }
  img {
    cursor: pointer;
  }
`;

export const EmptyTech = styled.h3`
  margin-top: 48px;
  color: var(--gray-0);
`;

import styled from "styled-components";

export const ContainerBig = styled.div`
  width: 775px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 775px) {
    width: 369px;
  }
`;

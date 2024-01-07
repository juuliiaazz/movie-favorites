import styled from "styled-components";

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const LogoSpan = styled.span`
  font-size: 3.2rem;
`;

export const LogoTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 700px) {
    visibility: hidden;
  }
`;

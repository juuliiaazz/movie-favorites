import styled from "styled-components";

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 400px) {
    font-size: 1.3rem;
  }

  @media (max-width: 350px) {
    font-size: 1.1rem;
  }

  ${(props) =>
    props.type === "error" &&
    `
    text-align: center;
  font-size: 2rem;
  padding: 4.8rem;`}

  ${(props) =>
    props.type === "loading" &&
    `
    text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
  margin: 4.8rem;`}
`;

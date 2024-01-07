import styled from "styled-components";

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 7.5rem;
  padding: 0 3.2rem;
  background-color: var(--color-primary);
  border-bottom-left-radius: 0.9rem;
  border-bottom-right-radius: 0.9rem;
  max-width: 2000px;
  overflow-y: no-scroll;

  @media (max-width: 610px) {
    width: 100vw;
    min-width: 300px;
    grid-template-columns: 60px 1fr 1fr;
  }
`;

import styled from "styled-components";

export const SearchBar = styled.input`
  justify-self: center;
  border: none;
  padding: 1.1rem 1.6rem;
  font-size: 1.8rem;
  border-radius: 0.7rem;
  width: 40rem;
  transition: all 0.3s;
  color: var(--color-text);
  background-color: var(--color-primary-light);

  &:focus {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 610px) {
    max-width: 30rem;
  }

  @media (max-width: 400px) {
    max-width: 20rem;
  }
`;

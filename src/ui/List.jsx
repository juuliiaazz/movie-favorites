import styled from "styled-components";

export const Lists = styled.ul`
  list-style: none;
  padding: 0.8rem 0;
`;

export const List = styled.li`
  font-size: 1.6rem;
  position: relative;
  align-items: center;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 2.4rem;

  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid var(--color-background-100);

  @media (max-width: 400px) {
    padding: 1rem 1.5rem;
  }
`;

export const MovieLists = styled.li`
  font-size: 1.6rem;
  position: relative;
  align-items: center;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 2.4rem;

  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid var(--color-background-100);

  &:hover {
    background-color: var(--color-background-100);
  }

  @media (max-width: 400px) {
    padding: 1rem 1.5rem;
  }
`;

export const ListImage = styled.img`
  width: 100%;
  grid-row: 1 / -1;
`;

export const ListTitle = styled.h3`
  font-size: 1.8rem;

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const ListDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  @media (max-width: 400px) {
    gap: 1rem;
  }
`;

export const WatchedLists = styled.ul`
  height: calc(100% - 9rem);
`;

export const ListMovie = styled.ul`
  cursor: pointer;
  transition: all 0.3s;
`;

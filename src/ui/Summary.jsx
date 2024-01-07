import styled from "styled-components";

export const SummaryBox = styled.div`
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-bottom-left-radius: 0.9rem;
  border-bottom-right-radius: 0.9rem;
  background-color: var(--color-background-100);
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);

  @media (max-width: 400px) {
    min-width: 300px;
    padding-left: 1.6rem;
  }
`;

export const SummaryTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 0.9rem;

  @media (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

export const SummaryDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const SummaryExplanation = styled.div`
  position: absolute;
  top: 11rem;
  right: 4rem;
  width: 350px;
  padding: 15px;
  padding-left: 20px;
  border-radius: 0.9rem;
  background-color: var(--color-background-100);
  border: 1px solid var(--color-background-500);
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
  z-index: 2;

  ::before {
    content: "";
    position: absolute;
    top: -1rem;
    right: 31rem;
    width: 15px;
    height: 15px;
    background-color: var(--color-background-100);
    transform: rotate(45deg);
    border-radius: 0.2rem;
    border-left: 1px solid var(--color-background-500);
    border-top: 1px solid var(--color-background-500);
  }
`;

export const SummaryExplanationLists = styled.ul`
  list-style-type: none;
  display: block;
`;

export const SummaryExplanationList = styled.li`
  font-size: 1.4rem;
  padding: 0.5rem;
`;

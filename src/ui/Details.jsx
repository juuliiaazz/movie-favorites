import styled from "styled-components";

export const DetailsBox = styled.div`
  line-height: 1.4;
  font-size: 1.4rem;
`;

export const DetailsHeader = styled.header`
  display: flex;
`;

export const DetailsSection = styled.section`
  display: flex;
  padding: 4rem;
  flex-direction: column;
  gap: 1.6rem;

  @media (max-width: 430px) {
    padding: 1rem;
  }
`;

export const DetailsImage = styled.img`
  width: 33%;
`;

export const DetailsOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;
  padding: 2.4rem 3rem;
  background-color: var(--color-background-100);

  @media (max-width: 430px) {
    padding: 1.2rem 1.5rem;
  }
`;

export const DetailsTitle = styled.h2`
  font-size: 2.4rem;
  line-height: 1.1;
  margin-bottom: 0.4rem;
`;

export const DetailsRating = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
  background-color: var(--color-background-100);
  border-radius: 0.9rem;
  padding: 2rem 2.4rem;
  margin-bottom: 0.8rem;
  font-weight: 600;

  @media (max-width: 430px) {
    min-width: 250px;
  }
`;

import styled from "styled-components";

const BoxDiv = styled.div`
  position: relative;
  flex: 1;
  width: 90vw;
  max-width: 760px;
  height: auto;
  min-height: 100px;
  margin: 10px;
  background-color: var(--color-background-500);

  @media (max-width: 1000px) {
    flex: 100%;
    min-width: 500px;
    margin: 5px;
  }

  @media (max-width: 510px) {
    flex: 100%;
    min-width: 300px;
    min-height: 50px;
    margin: 5px;
  }
`;

export default BoxDiv;

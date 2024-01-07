import styled from "styled-components";

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  border: 0rem;
  height: 100%;

  width: 100vw;
  max-width: 180rem;
  margin: 0px auto auto;
  padding-bottom: 0px;

  overflow-x: hidden;

  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const MainBox = styled.main`
  margin: 40px;
  margin-bottom: 8rem;
  height: calc(93vh - 7.2rem - 3 * 2.4rem);

  @media screen and (max-width: 768px) {
    margin: 10px;
    height: calc(105vh - 7.2rem - 3 * 2.4rem);
  }
`;

export const MainRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export default MainBox;

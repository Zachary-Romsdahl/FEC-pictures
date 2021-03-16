import styled from 'styled-components';

export const LargeGridContainer = styled.div`
  padding-top: 80%;
  width: 100%;
  position: relative;
`;

export const LargeGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width:100%;
  max-width: 794px;
  display: grid;
  grid-template-rows: 1fr 48px 1fr;
  grid-template-columns: 60px 1fr 60px;
  `;

export const LargePicArea = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;
  display:flex;
  width: 100%;
  justify-content: center;
  height: 100%
  `;
export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
  animation-name: web-toolkit-wt-animated--appear-01;
  animation-duration: 200ms;
  animation-timing-function: ease-in;
`;
export const ButtonLeft = styled.button`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start:1;
  grid-column-end: 2;
  border-radius: 50%;
  z-index: 10;
  min-width: 48px;
  min-height: 48px;
  margin-left: 12px;
  padding: 12px;
  border: 0px;
  background-color: #FFFFFF;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);

  :hover {
    background-color: #F9F9F9;
  }
`;

/*
Suggestion: to refactor this later to one button component
and you could set the grid-column values based on props
*/
export const ButtonRight = styled.button`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 4;
  border-radius: 50%;
  z-index: 10;
  min-width: 48px;
  min-height: 48px;
  margin-right:12px;
  padding: 12px;
  border: 0px;
  background-color: #FFFFFF;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);

  :hover {
    background-color: #F9F9F9;
  }
`;

export const HeartButton = styled.button`
  width: 42px;
  height: 42px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 9px;
  border: 0;
  margin-right: 12px;
  margin-top: 12px;
  background: #FFFFFF;
  box-shadow: 0 2px 12px 0 rgba(34, 34, 34, 0.3);
  z-index: 15;
  border-radius: 24px;
  cursor: pointer;
`;

export const LikedPath = styled.path`
  color: #A61A2E;
  fill: currentColor;
`;

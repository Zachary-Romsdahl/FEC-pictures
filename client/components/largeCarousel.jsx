import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const LargeGridContainer = styled.div`
  padding-top: 80%;
  width: 100%;
  position: relative;
`;
const LargeGrid = styled.div`
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

const LargePicArea = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 4;
  display:flex;
  width: 100%;
  justify-content: center;
  height: 100%
  `;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
  animation-name: web-toolkit-wt-animated--appear-01;
  animation-duration: 200ms;
  animation-timing-function: ease-in;
`;
const ButtonLeft = styled.button`
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

  :hover {
    background-color: #F9F9F9;
  }
`;

/*
Suggestion: to refactor this later to one button component
and you could set the grid-column values based on props
*/
const ButtonRight = styled.button`
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

  :hover {
    background-color: #F9F9F9;
  }
`;

function LargeCarousel(props) {
  const { picture, currPicPos, buttonClick } = props;
  return (
    <LargeGridContainer>
      <LargeGrid>
        <ButtonLeft className="left-button" onClick={(e) => { buttonClick(e); }}>
          <span className="left-button">
            <svg className="left-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path className="left-button" d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z" />
            </svg>
          </span>
        </ButtonLeft>
        <LargePicArea>
          <Image key={currPicPos} src={picture.large} alt="Pending Imagery" />
        </LargePicArea>
        <ButtonRight className="right-button" onClick={(e) => { buttonClick(e); }}>
          <span className="right-button">
            <svg className="right-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path className="right-button" d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z" />
            </svg>
          </span>
        </ButtonRight>
      </LargeGrid>
    </LargeGridContainer>
  );
}

export default LargeCarousel;

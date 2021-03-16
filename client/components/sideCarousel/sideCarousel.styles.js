import styled from 'styled-components';

export const SideCarouselWrapper = styled.div`
  overflow:hidden;
  position: relative;
  min-width: 66px;
`;
export const CarouselTop = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 90;
`;

export const CarouselBottom = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: pointer;
  z-index: 90;
`;

export const List = styled.ul`
  position: absolute;
  list-style-type: none;
  padding: 0;
  margin-top: 0px;
  height: 100%;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  height: 60px;
  width: 60px;
  margin: 0px 6px 6px 0px;
  border-radius: 6px;
`;

export const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 6px;
  opacity: 0.6;
  cursor: pointer;
  transition:-property: opacity;
  transition-duration: 0.1s;
  transition-timing-function: ease;
  transition-delay: 0s;

  :hover {
    opacity: 1.0;
  }
`;

export const ClickedListItem = styled.li`
height: 56px;
width: 56px;
margin: 0px 6px 6px 0px;
border: 2px solid #000;
border-radius: 6px;
`;

export const ClickedImage = styled.img`
  height:56px;
  width:56px;
  border-radius: 6px;
  opacity: 1;
  cursor: pointer;
`;

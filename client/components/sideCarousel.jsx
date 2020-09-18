/* eslint-disable class-methods-use-this */
import React from 'react';
import styled from 'styled-components';

const SideCarouselWrapper = styled.div`
  overflow:hidden;
  position: relative;
  min-width: 66px;
`;
const CarouselTop = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 90;
`;

const CarouselBottom = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: pointer;
  z-index: 90;
`;

const List = styled.ul`
  position: absolute;
  list-style-type: none;
  padding: 0;
  margin-top: 0px;
  height: 100%;
  overflow-y: scroll;
`;
const ListItem = styled.li`
  height: 60px;
  width: 60px;
  margin: 0px 6px 6px 0px;
  border-radius: 6px;
`;
const Image = styled.img`
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

const ClickedListItem = styled.li`
height: 56px;
width: 56px;
margin: 0px 6px 6px 0px;
border: 2px solid #000;
border-radius: 6px;
`;

const ClickedImage = styled.img`
  height:56px;
  width:56px;
  border-radius: 6px;
  opacity: 1;
  cursor: pointer;
`;

class SideCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseEnterTop = this.handleMouseEnterTop.bind(this);
    this.handleMouseEnterBottom = this.handleMouseEnterBottom.bind(this);
  }

  // Handles autoscrolling up
  handleMouseEnterTop() {
    const list = document.getElementById('pictures-list');
    list.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handles autoscrolling down
  handleMouseEnterBottom() {
    const list = document.getElementById('pictures-list');
    list.scrollTo({ top: 5000, behavior: 'smooth' });
  }

  handleClick(e) {
    const posY = e.clientY;
    const list = document.getElementById('pictures-list').childNodes;
    for (let i = 0; i < list.length; i += 1) {
      const smallPic = list[i].childNodes[0];
      const { y } = smallPic.getBoundingClientRect();
      if (posY > y && posY < y + 60) {
        smallPic.click();
        return;
      }
    }
  }

  render() {
    const { pictures, currPicPos, pictureClick } = this.props;
    return (
      <SideCarouselWrapper>
        <CarouselTop
          onMouseEnter={(e) => { this.handleMouseEnterTop(e); }}
          onClick={(e) => { this.handleClick(e); }}
        />
        <CarouselBottom
          onMouseEnter={(e) => { this.handleMouseEnterBottom(e); }}
          onClick={(e) => { this.handleClick(e); }}
        />
        <List id="pictures-list">
          {pictures.map((picture, i) => (
            (i === currPicPos)
              ? (
                <ClickedListItem key={i}>
                  <ClickedImage
                    id={i}
                    src={picture.thumbnail}
                    alt={picture.thumbnail}
                  />
                </ClickedListItem>
              )
              : (
                <ListItem key={i}>
                  <Image
                    id={i}
                    src={picture.thumbnail}
                    alt={picture.thumbnail}
                    onClick={(e) => { pictureClick(e); }}
                  />
                </ListItem>
              )))}
        </List>
      </SideCarouselWrapper>
    );
  }
}

export default SideCarousel;

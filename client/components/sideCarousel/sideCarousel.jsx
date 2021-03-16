import React from 'react';
import {
  SideCarouselWrapper,
  CarouselTop,
  CarouselBottom,
  List,
  ListItem,
  Image,
  ClickedListItem,
  ClickedImage,
} from './sideCarousel.styles';

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
    const list = document.getElementById('pictures- list');
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

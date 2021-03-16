import React from 'react';
import {
  LargeGridContainer,
  LargeGrid,
  LargePicArea,
  Image,
  ButtonLeft,
  ButtonRight,
  HeartButton,
  LikedPath,
} from './largeCarousel.styles';

class LargeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };

    this.handleHeartClick = this.handleHeartClick.bind(this);
  }

  handleHeartClick() {
    let { liked } = this.state;
    liked = !liked;
    this.setState({ liked });
  }

  render() {
    const { picture, currPicPos, buttonClick } = this.props;
    const { liked } = this.state;
    return (
      <LargeGridContainer>
        <HeartButton onClick={this.handleHeartClick}>
          <span>
            <svg id="heart-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              {liked
                ? (<LikedPath d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" />)
                : (<path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" />)}
            </svg>
          </span>
        </HeartButton>
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
}

export default LargeCarousel;

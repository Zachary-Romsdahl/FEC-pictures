import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import SideCarousel from './components/sideCarousel.jsx';
import LargeCarousel from './components/largeCarousel.jsx';

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  height:100%;
  width: 100%;
`;

class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: null,
      currPicture: null,
      currPicPos: null,
    };
    this.handleArrowButtonClick = this.handleArrowButtonClick.bind(this);
    this.handleSmallPictureClick = this.handleSmallPictureClick.bind(this);
  }

  componentDidMount() {
    const itemId = window.location.pathname.slice(1);
    axios.get('http://localhost:3000/pictures', {
      params: {
        itemId: itemId || 1,
      },
    })
      .then((response) => {
        const pics = response.data.item_pictures;
        this.setState({
          pictures: pics,
          currPicture: pics[0],
          currPicPos: 0,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.response.data.error);
      });
  }

  handleArrowButtonClick(e) {
    const { pictures, currPicPos } = this.state;
    const numOfPics = pictures.length - 1;
    const { className } = e.target;
    const leftClick = className.baseVal === 'left-button' || (typeof className === 'string' && className.includes('left-button'));

    let newPicPos = 0;

    if (currPicPos === 0 && leftClick) {
      newPicPos = numOfPics;
    } else if (currPicPos === numOfPics && !leftClick) {
      newPicPos = 0;
    } else if (leftClick) {
      newPicPos = currPicPos - 1;
    } else if (!leftClick) {
      newPicPos = currPicPos + 1;
    } else {
      console.log('Error in handleButtonClick');
    }

    this.setState({
      currPicture: pictures[newPicPos],
      currPicPos: newPicPos,
    });
  }

  handleSmallPictureClick(e) {
    const { pictures } = this.state;
    const newPicPos = Number(e.target.id);
    const newPic = pictures[newPicPos];

    this.setState({
      currPicture: newPic,
      currPicPos: newPicPos,
    });
  }

  render() {
    const { pictures, currPicture, currPicPos } = this.state;
    return (
      <Grid>
        {pictures && (
          <SideCarousel
            pictures={pictures}
            currPicPos={currPicPos}
            pictureClick={this.handleSmallPictureClick}
          />
        )}
        {currPicture && (
          <LargeCarousel
            picture={currPicture}
            currPicPos={currPicPos}
            buttonClick={this.handleArrowButtonClick}
          />
        )}
      </Grid>
    );
  }
}

ReactDOM.render(<Pictures />, document.getElementById('pictures-area'));

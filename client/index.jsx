import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import SideCarousel from './components/sideCarousel.jsx';
import LargeCarousel from './components/largeCarousel.jsx';

export const Grid = styled.div`
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
    };
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
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.response.data.error);
      });
  }

  render() {
    const { pictures, currPicture } = this.state;
    return (
      <Grid>
        {pictures && <SideCarousel pictures={pictures} clickedPicture={currPicture} />}
        {currPicture && <LargeCarousel picture={currPicture} />}
      </Grid>
    );
  }
}

export default Pictures;
// ReactDOM.render(<Pictures itemId={5} />, document.getElementById('pictures-area'));

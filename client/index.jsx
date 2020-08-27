import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SideCarousel from './components/sideCarousel.jsx';
import LargeCarousel from './components/largeCarousel.jsx';

class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: null,
      currPicture: null,
    };
  }

  componentDidMount() {
    const { itemId } = this.props;
    axios.get('/pictures', {
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
      <div>
        {pictures && <SideCarousel pictures={pictures} clickedPicture={currPicture} />}
        {currPicture && <LargeCarousel picture={currPicture} />}
      </div>
    );
  }
}

ReactDOM.render(<Pictures itemId={5} />, document.getElementById('pictures-area'));

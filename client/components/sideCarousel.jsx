import React from 'react';

function SideCarousel(props) {
  const { pictures } = props;
  return (
    <div>
      <ul>
        {pictures.map((picture, i) => (
          <li key={i}>
            <img src={picture.thumbnail} alt={picture.thumbnail} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideCarousel;

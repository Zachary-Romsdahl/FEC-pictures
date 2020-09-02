import React, { useState, useEffect } from 'react';

function LargeCarousel(props) {
  const { picture } = props;
  return (
    <img src={picture.large} alt="Pending Imagery" />
  );
}

export default LargeCarousel;

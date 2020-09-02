import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function LargeCarousel(props) {
  const { picture } = props;
  const Large = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
  `;
  const Image = styled.img`
    max-width: 100%;
    height: 100%;
  `;
  return (
    <Large>
      <Image src={picture.large} alt="Pending Imagery" />
    </Large>
  );
}

export default LargeCarousel;

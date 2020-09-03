import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  overflow:hidden;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 0px;
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
`;

function SideCarousel(props) {
  const { pictures, currPicPos } = props;
  return (
    <Div>
      <List>
        {pictures.map((picture, i) => (
          (i === currPicPos)
            ? (
              <ClickedListItem key={i}>
                <ClickedImage src={picture.thumbnail} alt={picture.thumbnail} />
              </ClickedListItem>
            )
            : (
              <ListItem key={i}>
                <Image src={picture.thumbnail} alt={picture.thumbnail} />
              </ListItem>
            )))}
      </List>
    </Div>
  );
}

export default SideCarousel;

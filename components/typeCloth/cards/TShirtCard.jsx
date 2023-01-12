import React from 'react';
import Card from '../cardTemplate/CardTemplate';
import TShirt from '../SVGs/TShirt';


const TShirtCard = ({ id, width, clothes }) => {
  return (
    <Card 
      SVG={TShirt} 
      id={id} 
      width={width} 
      clothes={clothes}
    />
  );
};

export default TShirtCard;

import react from 'react';
import Card from '../cardTemplate/CardTemplate';
import TShirt from '../SVGs/TShirt';


const TShirtCard = ({id, width}) => {
  return (
    <Card SVG={TShirt} id={id} width={width} />
  );
};

export default TShirtCard;

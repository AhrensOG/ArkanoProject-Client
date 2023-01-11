import react from 'react';
import Card from '../cardTemplate/CardTemplate';
import TShirt from '../SVGs/TShirt';


const TShirtCard = ({ id, width, chestColor, leftArmColor, rightArmColor, neckColor }) => {
  return (
    <Card 
      SVG={TShirt} 
      id={id} 
      width={width} 
      chestColor={chestColor} 
      leftArmColor={leftArmColor} 
      rightArmColor={rightArmColor} 
      neckColor={neckColor} 
    />
  );
};

export default TShirtCard;

import LinkedList from '../../linkedList/linkedList';
import clothesPropsByClassAndCut from './SVGScrapping';


/* 
Obtención y elección de clase y corte 
*/
const classes = Object.keys(clothesPropsByClassAndCut);
const classClothes = classes[/* Input --> */0/* Remera, Buzo o Campera */ % classes.length];

const cuts = Object.keys(clothesPropsByClassAndCut[classClothes]);
const cutClothes = cuts[/* Input --> */0/* Remera, Buzo o Campera */ % cuts.length];

/* 
Construcción de la estructura de datos del estado clothes (dinámica + estática) 
*/
const clothes = {
    class: classClothes, // default value: 'Remera'
    cut: cutClothes, // default value: 'Cut 1'
    color: {
        ...clothesPropsByClassAndCut[classClothes][cutClothes].frontal.color,
        ...clothesPropsByClassAndCut[classClothes][cutClothes].dorsal.color,
    },
    text: [{
        zone: /* Input --> */ 'frontal' /* 'frontal' o 'dorsal' */,
        text: /* Input --> */ 'Nueva REMERA' /**/,
        typography: /* Input --> */ 'arial' /**/,
        size: /* Input --> */ 20 /**/,
    }],
    image: [{
        zone: /* Input --> */ 'dorsal' /* 'frontal', 'dorsal' */,
        source: /* Input --> */ 'http://URL.com' /* URL o Base-64 */,
    }],
};

// console.log({ clothes, classes, cuts, file: './context/Reducer/initialState.js' });

/* 
Inicialización de la LinkedList 
*/
const list = new LinkedList();
list.insert({ data: clothes });

/* 
Inicialización del estado inicial 
*/
const state = {
    linkedList: list,
    currentNode: list.point,
    clothes,
};

export default state;

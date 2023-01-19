import LinkedList from '../../linkedList/linkedList';


// Construcción de la parte dinámica del estado clothes
export const clothesPropsByClassAndCut = {
    Remera: {
        'Cut 1': {
            color: {
                Frontal: /* Input --> */ '' /**/,
                Mangas: /* Input --> */ '' /**/,
                Cuello: /* Input --> */ '' /**/,
            },
        },
        'Cut 2': {
            color: {
                Frontal: /* Input --> */ '' /**/,
                Mangas: /* Input --> */ '' /**/,
                Cuello: /* Input --> */ '' /**/,
                'parte extra rem': /* Input --> */ '' /**/,
            },
        },
    },
    Buzo: {
        'Cut 1': {
            color: {
                Frontal: /* Input --> */ '' /**/,
                Mangas: /* Input --> */ '' /**/,
                Cuello: /* Input --> */ '' /**/,
                Capucha: /* Input --> */ '' /**/,
                'Bolsillo canguro': /* Input --> */ '' /**/,
            },
        },
        'Cut 2': {
            color: {
                Frontal: /* Input --> */ '' /**/,
                Mangas: /* Input --> */ '' /**/,
                Cuello: /* Input --> */ '' /**/,
                Capucha: /* Input --> */ '' /**/,
                'Bolsillo canguro': /* Input --> */ '' /**/,
                'parte extra buz': /* Input --> */ '' /**/,
            },
        },
    },
    Campera: {
        'Cut 1': {
            color: {
                Frontal: /* Input --> */ '' /**/,
                Mangas: /* Input --> */ '' /**/,
                Cuello: /* Input --> */ '' /**/,
                Capucha: /* Input --> */ '' /**/,
                Bolsillos: /* Input --> */ '' /**/,
            },
        },
        'Cut 2': {
            color: {
                Frontal: /* Input --> */ '' /**/,
                Mangas: /* Input --> */ '' /**/,
                Cuello: /* Input --> */ '' /**/,
                Capucha: /* Input --> */ '' /**/,
                Bolsillos: /* Input --> */ '' /**/,
                'parte extra cam': /* Input --> */ '' /**/,
            },
        },
    },
};

// Obtención y elección de clase y corte
const classes = Object.keys(clothesPropsByClassAndCut);

// console.log({ classes, file: './context/Reducer/initialState.js' });

const classClothes = classes[/* Input --> */0/* Remera, Buzo o Campera */ % classes.length];

const cuts = Object.keys(clothesPropsByClassAndCut[classClothes]);

// console.log({ cuts, file: './context/Reducer/initialState.js' });

const cutClothes = cuts[/* Input --> */0/* Remera, Buzo o Campera */ % cuts.length];

// Construcción de la estructura de datos del estado clothes (dinámica + estática)
const clothes = {
    class: classClothes, // default value: 'Remera'
    cut: cutClothes, // default value: 'Cut 1'
    color: {
        ...clothesPropsByClassAndCut[classClothes][cutClothes].color,
    },
    text: [{
        zona: /* Input --> */ 'frontal' /* 'frontal' o 'posterior' */,
        HTML: /* Input --> */ '<p>Nueva REMERA</p>' /**/,
    }],
    image: [{
        zona: /* Input --> */ 'posterior' /* 'frontal', 'posterior', 'mangaDerecha' o 'mangaIzquierda' */,
        url: /* Input --> */ 'http://URL.com' /**/,
    }],
};

// console.log({ clothes, file: './context/Reducer/initialState.js' });

// Inicialización de la LinkedList
const list = new LinkedList();
list.insert({ data: clothes });

// Inicialización del estado inicial
const state = {
    linkedList: list,
    currentNode: list.point,
    clothes,
};

export default state;

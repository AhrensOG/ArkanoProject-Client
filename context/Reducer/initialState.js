import LinkedList from '../../linkedList/linkedList';


// Construcción de la parte dinámica del estado clothes
export const clothesPropsByClass = {
    Remera: {
        color: {
            Frontal: /* Input --> */ '' /**/,
            Mangas: /* Input --> */ '' /**/,
            Cuello: /* Input --> */ '' /**/,
        },
    },
    Buzo: {
        color: {
            Frontal: /* Input --> */ '' /**/,
            Mangas: /* Input --> */ '' /**/,
            Cuello: /* Input --> */ '' /**/,
            Capucha: /* Input --> */ '' /**/,
            'Bolsillo canguro': /* Input --> */ '' /**/,
        },
    },
    Campera: {
        color: {
            Frontal: /* Input --> */ '' /**/,
            Mangas: /* Input --> */ '' /**/,
            Cuello: /* Input --> */ '' /**/,
            Capucha: /* Input --> */ '' /**/,
            Bolsillos: /* Input --> */ '' /**/,
        },
    },
};

// Construcción de la estructura de datos del estado clothes (dinámica + estática)
const classes = Object.keys(clothesPropsByClass).reduce((obj, classClothes) => {
    return { 
        ...obj,
        [classClothes]: classClothes,
    };
}, {});

// console.log({ classes, file: './context/Reducer/initialState.js' });

const classClothes = classes./* Input --> */Remera/* Remera, Buzo o Campera */;

const clothes = {
    class: classClothes, // default value: 'Remera'
    color: {
        ...clothesPropsByClass[classClothes].color,
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
list.insert(clothes);

// Inicialización del estado inicial
const state = {
    linkedList: list,
    currentNode: list.point,
    clothes,
};

export default state;

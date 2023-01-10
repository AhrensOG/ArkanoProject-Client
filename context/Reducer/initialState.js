import LinkedList from '../../linkedList/linkedList';


// Estructura de datos de la prenda
const clothes = {
    class: 'Remera',
    color: {
        Frontal: '',
        Posterior: '',
        Mangas: '',
        Cuello: '',
    },
    text: [{
        zona: 'frontal', // frontal o posterior
        HTML: '<p>Nueva REMERA</p>',
    }],
    image: [{
        zona: 'posterior', // frontal, posterior, mangaDerecha o mangaIzquierda
        url: 'http://URL.com',
    }],
};

// Inicialización de la LinkedList
const list = new LinkedList();
list.insert(clothes);

// Preinicialización del estado inicial
const state = {
    linkedList: list,
    currentNode: list.point,
    clothes,
};

// Armado de la parte dinámica del estado
export const remeraColorZones = Object.keys(state.clothes.color);
export const addtionalClothesColorZone = {
    Remera: {},
    Buzo: {
        Capucha: '',
        Bolsillo: '',
    },
    Campera: {
        Capucha: '',
        Bolsillos: '',
    },
};

// Inicialización del estado inicial actualizando la preinicialización con la parte dinámica
state.clothes.color = {
    ...state.clothes.color,
    ...addtionalClothesColorZone[state.clothes.class],
};
state.linkedList.insert(state.clothes, 1);

export default state;

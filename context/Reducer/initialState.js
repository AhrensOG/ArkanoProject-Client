const state = {
    clothes: {
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
    },
};

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

state.clothes.color = {
    ...state.clothes.color,
    ...addtionalClothesColorZone[state.clothes.class],
};

export default state;

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

export default state;

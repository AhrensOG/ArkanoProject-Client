const custom = {
    // Nodos guardados en la List
    maxLength: 200/* Input: 0 < maxLength */,

    // Reseatear List cuando se cambia clothes.class
    resetStateWhenChangeClassClothes: false/* Input: true or false */,

    // Guardar la información en las props al cambiar clothes.class
    saveValues: false/* Input: true or false */,

};

custom.resetStateWhenChangeClassClothes && (custom.saveValues = false);

export default custom;

function Node(data) {
	this.data = data;
	this.next = null;
	this.back = null;
	this.position = null;
};


Node.prototype.refreshPosition = function() {
    this.position = this.back ? this.back.position + 1 : 1;
    return this;
};


function LinkedList() {
	this.point = null;
	this.length = 0;
    this.initializate = false;
};


LinkedList.prototype.initializateList = function({ data, resetStateWhenChangeClassClothes }) {
    if (!this.initializate && (this.length <= 1 || resetStateWhenChangeClassClothes)) {
        const newNode = new Node(data);
        this.point = newNode.refreshPosition();
        this.length = 1;
        this.initializate = true;
    };
};

LinkedList.prototype.refreshLengthAndPosition = function() {
    let pointer = this.point?.refreshPosition(),
        count = pointer ? 1 : 0;
    while (pointer?.next) {
        pointer = pointer.next.refreshPosition();
        count++;
    };
    this.length = count;
};

LinkedList.prototype.findByPosition = function({ pos /* Opcional: Por defecto devuelve el nodo final */ }) {
	if (pos !== undefined && pos !== null && !Number.isInteger(pos)) throw new Error({ 
		message: 'The sitting position is not a integer number', 
	});

    const position = Number.isInteger(pos) && pos <= 0 ? 0 : pos;
	let pointer = this.point?.refreshPosition();
    if (!pointer) return null;
    else if (position === 0 || this.length < position) return null;
	while (pointer.next && (!position || pointer.next.position <= position)) pointer = pointer.next.refreshPosition();
	return pointer;
};

LinkedList.prototype.compareDataNodeWithData = function({ data, node /* Opcional */, pos /* Opcional: Por defecto compara con el nodo final, si es que tampoco se ingresa el argumento 'node' */ }) {
	if (pos !== undefined && pos !== null && !Number.isInteger(pos)) throw new Error({ 
		message: 'The sitting position is not a integer number', 
	});

    const position = (pos !== null && this.length < pos) ? this.length : pos; 
    let pointer = node ? node : this.findByPosition({ pos: position });
    const stringData = JSON.stringify(data);
    const stringDataNode = JSON.stringify(pointer?.data);
	return {
        compare: stringData === stringDataNode,
        pointer,
    };
};

LinkedList.prototype.lengthControl = function({ remove }) {
	if (remove !== undefined && remove !== null && !Number.isInteger(remove) || remove < 0) throw new Error({ 
		message: 'The sitting remove is not a integer number', 
	});

	let pointer = this.point,
        position = pointer?.position;
    if (!remove) return;
    while (pointer && position <= remove) {
        pointer = pointer.next;
        position = pointer?.position;
    };
    this.point = pointer;
    this.length = this.length - remove;
    pointer && (pointer.back = null);
	pointer && this.refreshLengthAndPosition();
};

LinkedList.prototype.insert = function({ data, maxLength /* Opcional */, pos /* Opcional: Por defecto agrega al final */ }) {
	if (pos !== undefined && pos !== null && !Number.isInteger(pos)) throw new Error({ 
		message: 'The position seted is not a integer number', 
	});

	const newNode = new Node(data);
    let position = ((!pos && pos !== 0) || this.length < pos)
        ? this.length + 1
        : (pos <= 1)
        ? 1
        : pos;
    const { compare, pointer } = this.compareDataNodeWithData({ data, pos: position - 1 });
    if (compare) return pointer;
    newNode.back = pointer;
    pointer ? pointer.next = newNode : this.point = newNode;
    newNode.refreshPosition();
    this.length = position;
    if (maxLength || maxLength === 0) {
        const difference = position - maxLength;
        0 < difference && this.lengthControl({ remove: difference });
    };
	return newNode;
};


export default LinkedList;


// Test de la LinkedList

// const LIST = new LinkedList();
// LIST.insert({ data: 'A', pos: -1 });
// LIST.insert({ 
//     data: {
//         dato1: 2,
//         'dato2': "4",
//         "dato3": { datos: ['5'], },
//     }, 
//     pos: 2,
// });
// LIST.insert({ 
//     data: {
//         dato1: 2,
//         dato2: '4',
//         dato3: { datos: ['5'] }
//     }, 
//     pos: null,
// });
// LIST.insert({ data: () => 1, pos: 7 });
// LIST.insert({ data: 'D', maxLength: null, pos: null });
// LIST.lengthControl({ remove: null });


// console.log(LIST.compareDataNodeWithData({ 
//     data: { "dato1": 2,  "dato2": '4',  dato3: { 'datos': [ '5' ] } }, 
//     pos: 2
// }).compare);
// console.log(LIST.compareDataNodeWithData({ 
//     data: (function() { return 1; }), 
//     pos: 3
// }).compare);
// console.log(LIST);
// console.log(LIST.findByPosition({ pos: null }));

function LinkedList() {
	this.point = null;
	this.length = 0;
};

function Node(data) {
	this.data = data;
	this.next = null;
	this.back = null;
	this.position = null;
};

LinkedList.prototype.insert = function({ data, pos /* Opcional: Por defecto agrega al final */ }) {
	if (pos !== undefined && pos !== null && !Number.isInteger(pos)) throw new Error({ 
		message: 'The position seted is not a integer number', 
	});

	const newNode = new Node(data);
	let pointer = this.point;
	if ((!pos && pos !== 0) || this.length < pos) {
		this.length++;
		newNode.position = this.length;
        while (pointer?.next) pointer = pointer.next;
        newNode.back = pointer;
        (pointer === null) ? this.point = newNode : pointer.next = newNode;
	} else {
        pos = pos < 1 ? 1 : pos;
		this.length = pos;
		newNode.position = pos;
		if (pos === 1) {
            newNode.back = null;
            this.point = newNode;
		} else {
            while (pointer.next.position < pos) pointer = pointer.next;
            newNode.back = pointer;
            pointer.next = newNode;
        };
	};
	return newNode;
};

LinkedList.prototype.findByPosition = function({ pos /* Opcional: Por defecto devuelve el nodo final */ }) {
	if (pos !== undefined && pos !== null && !Number.isInteger(pos)) throw new Error({ 
		message: 'The sitting position is not a integer number', 
	});

	let pointer = this.point;
	if (!pos && pos !== 0) {
		while (pointer.next !== null) pointer = pointer.next;
	} else if (pos <= this.length) {
        pos = pos < 1 ? 1 : pos;
		while (pointer.next?.position <= pos) pointer = pointer.next;
	} else return null;
	return pointer;
};

export default LinkedList;


// Test de la LinkedList

/* const LIST = new LinkedList();
LIST.insert({ data: 'A' });
LIST.insert({ data: 'B' });
LIST.insert({ data: 'C', pos: 4 });
LIST.insert({ data: 'D', pos: 4 });

console.log(LIST.findByPosition({  })); */

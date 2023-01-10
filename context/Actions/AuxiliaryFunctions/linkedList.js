export const updateLinkedList = ({ clothes, state }) => {
    const currentNode = state.linkedList.insert(clothes, state.currentNode.position + 1);
    return { 
        currentNode,
    };
};

export const updateLinkedList = ({ clothes, state }) => {
    const currentNode = state.linkedList.insert({ data: clothes, pos: state.currentNode.position + 1 });
    return { 
        currentNode,
    };
};

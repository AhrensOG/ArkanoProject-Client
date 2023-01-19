import custom from '../Customize';


const { maxLength, resetStateWhenChangeClassClothes } = custom;

export const initializateLinkedList = ({ clothes, state }) => {
    state.linkedList.initializateList({ 
        data: clothes, 
    });
};

export const updateLinkedList = ({ clothes, state }) => {
    const currentNode = state.linkedList.insert({ 
        data: clothes,
        maxLength,
        pos: resetStateWhenChangeClassClothes ? 1 : state.currentNode.position + 1,
    });
    return { 
        currentNode,
    };
};

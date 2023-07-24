

const todos = ( todo=1 , action) =>{
    switch (action.type) {
        case 'INCREMENTTODO':
            return todo + 1
        case 'DECREMENTTODO':
            return todo - 1
        default:
            return todo;
    }
}

export default todos;
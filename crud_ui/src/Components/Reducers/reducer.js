const initialState = {
    userList : [],
    defaultValue : []
}
 const userOperation = (createUser = initialState, action) => {

    console.log(action);
    console.log(createUser)
    switch (action.type) {
        case 'CREATE_USER':
            return ({...createUser, userList: action.payload })
        default:
            return createUser
    }
}

export {userOperation}  ;
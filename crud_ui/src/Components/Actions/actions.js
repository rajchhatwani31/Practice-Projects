


export const create = (payload) => {
    return {
        type: "CREATE_USER", 
        payload : payload
    }
}
export const remove = (payload) => {
    return {
        type: "DELETE_USER", 
        payload : payload
    }
}



export const edit = (payload) => {
    return {
        type: "EDIT_USER", 
        payload : payload
    }
}
const counterReducer = (state = 0, action) => {
    if(action.type === 'PLUS'){
        return state + 1;
    }

    return state;
}

export default counterReducer;
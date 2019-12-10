const ui = {
    nav: 0,
    //0 : only main
    //1 : navigation or header
}

const uiReducer = (state = ui, action) => {
    switch (action.type) {
        case 'UI_NAV':
            return Object.assign({}, state, {
                nav: action.payload
            });
        default:
            return state;
    }
}

export default uiReducer;
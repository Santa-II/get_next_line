const auth = {
    isLogin: false
}

const authReducer = (state = auth, action) => {
    switch (action.type) {
        case 'AUTH_ISLOGIN':
            return Object.assign({}, state, {
                isLogin: !state.isRegister
            });
        default:
            return state;
    }
}

export default authReducer;
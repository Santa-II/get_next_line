// ui action

export const ui_nav = (value) => {
    return {
        type: 'UI_NAV',
        payload: value
    };
};

// auth action

export const auth_isLogin = () => {
    return {
        type: 'AUTH_ISLOGIN'
    };
};
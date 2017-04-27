import { TOOGLE_DISPLAY_REGISTER, SAVE_DATA_USER, SAVE_ERROR_USER, CLEAR_ERRORS } from './actionTypes';

export function toogleDisplayRegister() {
    return {
        type: TOOGLE_DISPLAY_REGISTER
    }
}

export function saveDataUser(userData) {
    return {
        type: SAVE_DATA_USER,
        userData
    }
}

export function signIn(userData) {
    const { username, password } = userData;
    let body = {
        password
    }
    if (username.indexOf('@') > -1) {
        body = Object.assign({}, body, { email: username })
    } else {
        body = Object.assign({}, body, { displayName: username })
    }
    console.log(body);
    return signUser(userData, () => {
        fetch('http://localhost:3001/api/signin', {
            method: 'POST',
            body: body
        }).then(res => {
            console.log(res);
        })
    })
}

export function signUp(userData) {
    return signUser(userData, () => {
        fetch('http://localhost:3001/api/signup', {
            method: 'POST',
            body: {
                displayName: userData.username,
                email: userData.email,
                password: userData.password
            }
        }).then(res => {
            console.log(res);
        })
    })
}

function validate(userData) {
    let errors = {}

    const keys = Object.keys(userData);
    keys.forEach((key) => {
        if (!userData[key]) errors[key] = 'You must introduce a ' + key;
    })

    return errors;
}

function signUser(userData, postFn) {
    return (dispatch, getState) => {
        const errors = validate(userData);
        if (Object.keys(errors).length > 0) {
            dispatch({
                type: SAVE_ERROR_USER,
                errors
            })
        } else {
            dispatch({
                type: CLEAR_ERRORS
            });
            postFn();
        }
    }
}
import ActionTypes from '../constants/auth.constant';

const INITIAL_STATE = {
    user: {},
    email: '',
    loginError: '',
    signupError: '',
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.SIGNUP_SUCCESS:
            return({
                ...state,
                user: action.payload
            })

        case ActionTypes.SIGNUP_FAILED:
            return({
                ...state,
                signupError: action.payload
            })

        case ActionTypes.SIGNIN_SUCCESS:
            return({
                ...state,
                user: action.payload
            })

        case ActionTypes.SIGNIN_FAILED:
            return({
                ...state,
                loginError: action.payload
            })


        default:
            return state
    }
}
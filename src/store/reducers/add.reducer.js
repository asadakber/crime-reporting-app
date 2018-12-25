import AddTypes from '../constants/add.constants';

const INITIAL_STATE = {
    crime: [],
    compliant: [],
    missingperson: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AddTypes.GET_CRIME:
            return({
                ...state,
                crime: action.payload
            })

        case AddTypes.GET_COMPLIANT:
            return({
                ...state,
                compliant: action.payload
            })

        case AddTypes.GET_MISSING_PERSON:
            return({
                ...state,
                missingperson: action.payload
            })

        default:
            return state
    }
}
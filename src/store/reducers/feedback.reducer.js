import feedbackTypes from '../constants/feedback.constant';

const INITIAL_STATE = {
    crimefeedback: [],
    compliantfeedback: [],
    missingfeedback: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case feedbackTypes.GET_CRIME_FEEDBACK:
            return({
                ...state,
                crimefeedback: action.payload
            })

        case feedbackTypes.GET_COMPLAINT_FEEDBACK:
            return({
                ...state,
                compliantfeedback: action.payload
            })

        case feedbackTypes.GET_MISSING_FEEDBACK:
            return({
                ...state,
                missingfeedback: action.payload
            })

        default:
            return state
    }
}
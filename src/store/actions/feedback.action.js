import feedbackTypes from '../constants/feedback.constant';
import { firebaseAuth, firebaseRef } from '../../config/index';

export const SendCrime = (crimefeedback) => {
    return dispatch => {
        firebaseRef.ref(`/Crimefeedback/`).push(crimefeedback)
    }
}

export const SendComplaint = (complaintfeedback) => {
    return dispatch => {
        firebaseRef.ref(`/Complaintfeedback/`).push(complaintfeedback)
    }
}

export const SendMissing = (missingfeedback) => {
    return dispatch => {
        firebaseRef.ref(`/Missingfeedback/`).push(missingfeedback)
    }
}

let crimefeedback = [];
export const GetSendCrime = () => {
    return dispatch => {
        const firebase = firebaseRef.ref(`/Crimefeedback/`)
        firebase.on('value', snap => {
            crimefeedback = [];
            snap.forEach(ev => {
                let obj = ev.val();
                obj.id = ev.key;
                crimefeedback.push(obj)
            })
            dispatch({type: feedbackTypes.GET_CRIME_FEEDBACK, payload: crimefeedback})
        })
    }
}


let compliantfeedback = [];
export const GetSendComplaint = () => {
    return dispatch => {
        const firebase = firebaseRef.ref(`/Complaintfeedback/`)
        firebase.on('value', snap => {
            compliantfeedback = [];
            snap.forEach(ev => {
                let obj = ev.val();
                obj.id = ev.key;
                compliantfeedback.push(obj)
            })
            dispatch({type: feedbackTypes.GET_COMPLAINT_FEEDBACK, payload: compliantfeedback})
        })
    }
}


let missingfeedback = [];
export const GetSendMissing = () => {
    return dispatch => {
        const firebase = firebaseRef.ref(`/Missingfeedback/`)
        firebase.on('value', snap => {
            missingfeedback = [];
            snap.forEach(ev => {
                let obj = ev.val();
                obj.id = ev.key;
                missingfeedback.push(obj)
            })
            dispatch({type: feedbackTypes.GET_MISSING_FEEDBACK, payload: missingfeedback})
        })
    }
}
import AddTypes from '../constants/add.constants';
import { firebaseAuth, firebaseRef } from '../../config/index';

export const AddCrime = (crime) => {
    return dispatch => {
        firebaseRef.ref(`/crime/`).push(crime)
    }
}

export const AddCompliant = (compliant) => {
    return dispatch => {
        firebaseRef.ref(`/compliant/`).push(compliant)
    }
}


export const AddMissingPerson = (missingperson) => {
    return dispatch => {
        firebaseRef.ref(`/missingperson/`).push(missingperson)
    }
}

let crime = [];
export const GetCrime = () => {
    return dispatch => {
        const firebase = firebaseRef.ref(`/crime/`)
        firebase.on('value', snap => {
            crime = [];
            snap.forEach(ev => {
                let obj = ev.val();
                obj.id = ev.key;
                crime.push(obj)
            })
            dispatch({type: AddTypes.GET_CRIME, payload: crime})
        })
    }
}

let compliant = [];
export const GetComplaint = () => {
    return dispatch => {
        const firebase = firebaseRef.ref(`/compliant/`)
        firebase.on('value', snap => {
            compliant = [];
            snap.forEach(ev => {
                let obj = ev.val();
                obj.id = ev.key;
                compliant.push(obj)
            })
            dispatch({type: AddTypes.GET_COMPLIANT, payload: compliant})
        })
    }
}

let missingperson = [];
export const GetMissingPerson = () => {
    return dispatch => {
       const firebase = firebaseRef.ref(`/missingperson/`)
       firebase.on('value', snap => {
            missingperson = [];
            snap.forEach(ev => {
                let obj = ev.val();
                obj.id = ev.key;
                missingperson.push(obj)
            })
            dispatch({type: AddTypes.GET_MISSING_PERSON, payload: missingperson})
        })
    }
}

export function deleteCrime(crimekey, index) {
    return dispatch => {
        firebaseRef.ref(`/crime/` + crimekey).remove()
        .then((v) => {
            crime = crime.slice(0, index).concat(crime.slice(index + 1));
            dispatch({type: AddTypes.GET_CRIME, payload: crime})
        })
    }
}

export function deleteComplaint(compliantkey, index) {
    return dispatch => {
        firebaseRef.ref(`/compliant/` + compliantkey).remove()
        .then((v) => {
            compliant = compliant.slice(0, index).concat(compliant.slice(index + 1));
            dispatch({type: AddTypes.GET_COMPLIANT, payload: compliant})
        })
    }
}

export function deletemissing(missingkey, index) {
    return dispatch => {
        firebaseRef.ref(`/missingperson/` + missingkey).remove()
        .then((v) => {
            missingperson = missingperson.slice(0, index).concat(missingperson.slice(index + 1));
            dispatch({type: AddTypes.GET_MISSING_PERSON, payload: missingperson})
        })
    }
}


import history from '../../routers/history';
import ActionTypes from '../constants/auth.constant';
import { firebaseAuth, firebaseRef } from '../../config/index';

export function getUser() {
    return dispatch => {
        firebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                firebaseRef.ref(`/users/${user.uid}`).on('value', snap => {
                    for(let key in snap.val()) {
                        if(snap.val()[key].type === "user"){
                               history.push('/dashboard')
                        }

                        else {
                            history.push('/')
                        }
                    }
                })
            } 
        })
        
    }
}

export const Signup = (user) => {
    return dispatch => {
        let { type ,username, email, password } = user
        firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then((result) => {
            let Uid = firebaseAuth.currentUser.uid
            firebaseRef.ref(`/users/${Uid}`).push(user)
            history.push('/')
            dispatch({
                type: ActionTypes.SIGNUP_SUCCESS,
                payload: result
            })
        })
        .catch((error) => {
            dispatch({
                type: ActionTypes.SIGNUP_FAILED,
                payload: error
            })
            alert(error)
        })
      
    }
}

export const Signin = (user) => {
    return dispatch => {
        firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
        .then((result) => {
            let Uid = firebaseAuth.currentUser.uid
            if(Uid === "c03FHLuoWjRndD5puZfo4HwtQeR2") {
                history.push('/admindashboard')
            }

            else {
                getUser();
            }
                dispatch({
                    type: ActionTypes.SIGNIN_SUCCESS,
                    payload: result
                })
            })
        .catch((error) => {
            dispatch({
                type: ActionTypes.SIGNIN_FAILED,
                payload: error
            })
            alert(error)
        })
    }
}

export const Signout = () => {
    return dispatch => {
        firebaseAuth.signOut()
        .then(() => {
            history.push('/')
            dispatch({
                type: ActionTypes.SIGNOUT_SUCCESS
            })
        })
        .catch((error) => {
            dispatch({
                type: ActionTypes.SIGNOUT_FAILED,
                payload: error
            })
            alert(error)
        })
    }
}


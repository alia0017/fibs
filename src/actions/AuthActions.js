/** 
 * Imported Libraries 
 */
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Redux: Authentication Actions to be called
 * Database Connectivity: Logging in, creating User
 */


/*
 * Helper Method for User Login Success
 */
const loginUserSuccess = (dispatch, user) => {
    dispatch({ 
        type: LOGIN_USER_SUCCESS, 
        payload: user 
    })
    Actions.main()
}

/*
 * Helper Method for User Login Fail
 */
const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
}

/*
 * Updates the email Input, sending it to the Reducer
 */
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

/*
 * Updates the password Input, sending it to the Reducer
 */
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

/*
 * Request to the Firebase Servers using the Authentaction call
 */
export const loginUser = ({ email, password }) => {
    return(dispatch) => {
        // loginUser(dispatch)
        dispatch ({ type: LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
            //console.log(error)

            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch))
        })
    }
}


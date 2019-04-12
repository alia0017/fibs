/** 
 * Imported Libraries 
 */
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { 
    UPDATE_SURVEY,
    CREATE_SURVEY,
    MODIFY_SURVEY,
    FETCH_SUCCESS_SURVEY
} from './types'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Redux: Survey Actions to be called
 * Database Connectivity: inserting, fetching, deleting, modifying
 */

/*
 * Updates the User Input, sending it to the Reducer
 */
export const updateSurvey = ({ prop, value }) => {
    return {
        type: UPDATE_SURVEY,
        payload: { prop, value }
    }
}

/**
 * Create a action, sending it to Firebase and return to previous scene
 */
export const createSurvey = ({ factor, factorNum, quest, quest2 }) => {
    //console.log(factor, factorNum, quest, quest2)
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/surveys`)
        .push({ factor, factorNum, quest, quest2 })
        .then(() => {
            dispatch({ type: CREATE_SURVEY })
            Actions.pop()
         })
    }
}

/**
 * Actively searches for changes on survey
 */
export const fetchSurvey = () => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/surveys`)
        //watch the datasource for the entire application life cycle
        .on('value', snapshot => {
            dispatch({ type: FETCH_SUCCESS_SURVEY, payload: snapshot.val() })
        })
    }
}

/**
 * Ability to modify a factor and questions, based on the surveys uid
 */
export const modifySurvey = ({ uid, factorNum, factor, quest, quest2 }) => {
    const { currentUser } = firebase.auth()

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/surveys/${uid}`)
        .set({ factorNum, factor, quest, quest2 })
        .then(() => { 
            dispatch({ type: MODIFY_SURVEY })
            Actions.pop()
        })
    }
}

/**
 * Ability to delete a factor, based on the surveys uid
 */
export const deleteSurvey = ({ uid }) => {
    const { currentUser } = firebase.auth()
    
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/surveys/${uid}`)
        .remove()
        .then(() => {
            Actions.pop()
        })
    }
}



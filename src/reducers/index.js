/** 
 * Imported Libraries 
 */
import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import SurveyFormReducer from './SurveyFormReducer'
import SurveyReducer from './SurveyReducer'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Library of reducers allowing for all the reducers to work
 * without conflict
 */

/** 
 * The names of the keys and their as the states
 */
export default combineReducers({
    auth: AuthReducer,
    surveyForm: SurveyFormReducer,
    surveys: SurveyReducer
})
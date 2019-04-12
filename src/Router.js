/**
 * Imported Libraries 
 */
import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import MainMenu from './components/MainMenu'
import ListSurvey from './components/ListSurvey'
import SurveyList from './components/SurveyList'
import CreateSurvey from './components/CreateSurvey'
import ModifySurvey from './components/ModifySurvey'

/**
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Router Component: Containing all the scenes/components
 */

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" 
                    component={LoginForm} 
                    title="FIBS™ Communities" initial />
                </Scene>

                <Scene key="main"> 
                    <Scene
                    key="mainMenu"
                    component={MainMenu}
                    title="FIBS™ Communities" />

                    <Scene
                    rightTitle="New Survey"
                    onRight = {() => Actions.surveyList()}
                    key="listSurvey"
                    component={ListSurvey}
                    title="FIBS™ Communities"/>

                    {/* <Scene
                    rightTitle="Add User"
                    onRight = {() => Actions.createUser()}
                    key="usersList"
                    component={UsersList}
                    title="FIBS™ Communities"/> */}

                    <Scene 
                    rightTitle="Insert Factors"
                    onRight = {() => Actions.createSurvey()}
                    key="surveyList" 
                    component={SurveyList} 
                    title="New Survey"/>

                    {/* <Scene
                    key="createUser"
                    component={CreateUser}
                    title="Create User"/> */}

                    {/* <Scene 
                    key="modifyUser"
                    component={ModifyUser}
                    title="Modify User"/> */}

                    <Scene
                    key="createSurvey"
                    component={CreateSurvey}
                    title="Create Survey"/>

                    <Scene 
                    key="modifySurvey"
                    component={ModifySurvey}
                    title="Modify Survey"/>
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent
/**
 * Imported Libraries 
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase'
import Router from './Router'

/**
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Main Class that is called by the index.js
 */

class App extends Component {

    /**
     * Method that Initialization of the Firebase server
     */
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBnt50WtZxPd3U04LLGZqnTH7K-PRAVVjA",
            authDomain: "fibs-communities.firebaseapp.com",
            databaseURL: "https://fibs-communities.firebaseio.com",
            projectId: "fibs-communities",
            storageBucket: "fibs-communities.appspot.com",
            messagingSenderId: "533975126456"
        }
        firebase.initializeApp(config);
    }

    /**
     * Method that invokes the Redux, Thunk & Router library
     */
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}> 
                <Router/>
            </Provider>
        )
    }
}

export default App
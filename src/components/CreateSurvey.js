/** 
 * Imported Libraries 
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { modifySurvey, createSurvey } from '../actions'
import { CardSection, Card, Button } from './common'
import SurveyForm from './SurveyForm'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * CreateSurvey Component: Creates a Survey and retrieves the state from reducer
 */

class CreateSurvey extends Component {

    /**
     * Method that creates an action - createSurvey 
     */
    onButtonPress() {
        const { factor, factorNum, quest, quest2 } = this.props

        this.props.createSurvey({ factor, factorNum: factorNum || 'Factor 1', quest, quest2 })
    }

    render() {
        return (
            <Card>
                <SurveyForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create Factors
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

/**
 * Maps the state to the components properties
 */
const mapStateToProps = (state) => {
    const { factor, factorNum, quest, quest2 } = state.surveyForm
    return  { factor, factorNum, quest, quest2 }
}

/**
 * Exports the the user action with redux connect
 */
export default connect(mapStateToProps, { 
    modifySurvey, createSurvey 
})(CreateSurvey)
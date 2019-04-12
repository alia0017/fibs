/** 
 * Imported Libraries 
 */
import _ from 'lodash'
import React, { Component } from 'react'
import { CardSection, Card, Button, Confirm } from './common'
import { connect } from 'react-redux'
import { updateSurvey, modifySurvey, deleteSurvey } from '../actions'
import SurveyForm from './SurveyForm'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * ModifySurvey Component: Displays the ModifySurvey component
 */

class ModifySurvey extends Component {

    state = { showModal: false }

    componentWillMount() {
        _.each(this.props.survey, (value, prop) => {
            this.props.updateSurvey({ prop, value })
        })
    }
    onButtonPress(){
        const { factor, factorNum, quest, quest2 } = this.props
        this.props.modifySurvey({ factor, factorNum, quest, quest2, uid: this.props.survey.uid })
    }
    onAccept(){
        const { uid } = this.props.survey
        this.props.deleteSurvey({ uid })
    }
    onDecline(){
        this.setState({ showModal: false })
    }

    render() {
        return (
            <Card>
                <SurveyForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Modify Factor
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: true })}>
                        Delete Factor
                    </Button>
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to delete this?
                </Confirm>
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
    updateSurvey, modifySurvey, deleteSurvey
})(ModifySurvey)
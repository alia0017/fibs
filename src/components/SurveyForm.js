/** 
 * Imported Libraries 
 */
import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { CardSection, Input } from './common'
import { connect } from 'react-redux'
import { updateSurvey } from '../actions'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * SurveyForm Component: The Survey Form, allowing to choose the factors/questions
 */

class SurveyForm extends Component {

    /**
     * Method that displays the user functionality
     */
    render() {
        return (
            <View>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Factor Number</Text>
                    <Picker
                    selectedValue={this.props.factorNum}
                    onValueChange={value => this.props.updateSurvey({prop: 'factorNum', value})}>
                        <Picker.Item label="Factor 1" value="Factor 1" />
                        <Picker.Item label="Factor 2" value="Factor 2" />
                        <Picker.Item label="Factor 3" value="Factor 3" />
                        <Picker.Item label="Factor 4" value="Factor 4" />
                        <Picker.Item label="Factor 5" value="Factor 5" />
                        <Picker.Item label="Factor 6" value="Factor 6" />
                        <Picker.Item label="Factor 7" value="Factor 7" />
                        <Picker.Item label="Factor 8" value="Factor 8" />
                        <Picker.Item label="Factor 9" value="Factor 9" />
                        <Picker.Item label="Factor 10" value="Factor 10" />
                    </Picker>

                    <CardSection>
                        <Input
                        label="Factor:"
                        placeholder="How career development decisions are made"
                        value={this.props.factor}
                        onChangeText={value => this.props.updateSurvey({prop: 'factor', value})}/>
                    </CardSection>

                    <CardSection>
                        <Input
                        label="Question 1:"
                        placeholder="Do you believe decisions on your career development are easily accessible?"
                        value={this.props.quest}
                        onChangeText={value => this.props.updateSurvey({prop: 'quest', value})}/>
                    </CardSection>

                    <CardSection>
                        <Input
                        label="Question 2:"
                        placeholder="Do you feel you have sufficient input on your career decisions?"
                        value={this.props.quest2}
                        onChangeText={value => this.props.updateSurvey({prop: 'quest2', value})}/>

                    </CardSection>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

/**
 * Maps the state to the components properties
 */
const mapStateToProps = (state) => {
    const { factorNum, factor, quest, quest2 } = state.surveyForm
    return { factorNum, factor, quest, quest2 }
}

/**
 * Exports the the user action with redux connect
 */
export default connect(mapStateToProps, { updateSurvey })(SurveyForm)
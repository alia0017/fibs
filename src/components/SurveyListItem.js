/** 
 * Imported Libraries 
 */
import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { CardSection } from './common'
import { Actions } from 'react-native-router-flux'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * SurveyListItem Component: Creates a SurveyListItem 
 */

class SurveyListItem extends Component {

    /**
     * Helper Method, using modfiySurvey from actions
     */
    onRowPress() {
        Actions.modifySurvey({ survey: this.props.survey })
    }

    render() {
        const { factorNum } = this.props.survey

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {factorNum}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

/**
 * Exports the SurveyListItem
 */
export default SurveyListItem
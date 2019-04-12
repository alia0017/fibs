/** 
 * Imported Libraries 
 */
import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurvey } from '../actions'
import { ListView, ImageBackground } from 'react-native'
import { Button, CardSection, Input } from './common'
import SurveyListItem from './SurveyListItem'
import { updateSurvey } from '../actions'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * SurveyList Component: Contains all the elments of SurveyListItem
 */

const  backImage = require('../assets/fibs_background.png')

class SurveyList extends Component {
    componentWillMount() {
        this.props.fetchSurvey()
        this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }
    createDataSource({ surveys }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        })
        this.dataSource = ds.cloneWithRows(surveys)
    }
    renderRow(survey){
        return <SurveyListItem survey={survey} />
    }

    render() {
        return (
            <ImageBackground
            style={styles.imageStyle}
            source={backImage}>
                <ListView
                style={styles.viewStyle}
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                />

                <CardSection style={styles.textStyle}>
                    <Input
                    label="Survey Name:"
                    placeholder="Developer"
                    value={this.props.surveyName}
                    onChangeText={value => this.props.updateSurvey({prop: 'surveyName', value})}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Submit Survey
                    </Button>
                </CardSection>

            </ImageBackground>
        )
    }
}

const styles = {
	imageStyle: {
        flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
    },
    viewStyle:{
        width: '100%',
    }
}

/**
 * Maps the state to the components properties
 */
const mapStateToProps = state => {
    const surveys = _.map(state.surveys, (val, uid, surveyName) => {
        return { ...val, uid, surveyName }
    })  
    return { surveys }
}

/**
 * Exports the the user action with redux connect
 */
export default connect( mapStateToProps, { 
    fetchSurvey, updateSurvey })(SurveyList)
/** 
 * Imported Libraries 
 */
import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurvey } from '../actions'
import { ImageBackground, ListView } from 'react-native'
import { Button, Spinner, CardSection } from './common'
import SurveyList from './SurveyList'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * ListSurvey Component: Contains the list of SurveyList
 */


const  backImage = require('../assets/fibs_background.png')

class ListSurvey extends Component {
    componentWillMount() {
        this.props.fetchSurvey()
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }
    createDataSource({ listSurveys }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        })
        this.dataSource = ds.cloneWithRows(listSurveys)
    }
    renderRow(listSurvey){
        return <SurveyList listSurvey={listSurvey} />
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

                <CardSection>
                    <Button>
                        Log Out
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
    const listSurveys = _.map(state.listSurveys, (val, uid) => {
        return { ...val, uid }
    })  
    return { listSurveys }
}

/**
 * Exports the the user action with redux connect
 */
export default connect(mapStateToProps, {fetchSurvey})(ListSurvey)
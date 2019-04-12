/** 
 * Imported Libraries 
 */
import React, { Component } from 'react'
import { ImageBackground, Image } from 'react-native'
import { Button, Card, CardSection } from './common'
import { Actions } from 'react-native-router-flux'

const  backImage = require('../assets/fibs_background.png')
const  whiteBack = require('../assets/white_background.png')
const  fibsLogo = require('../assets/fibs_logos.png')

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * MainMenu Component: Displays the MainMenu once logged in
 */

class MainMenu extends Component 
{
	render() {
		return (
		<ImageBackground 
		style={styles.imageStyle}
		source={backImage}>
			<Card style={styles.viewStyle}>
				<Image 
				style={styles.whiteStyle}
				source={whiteBack}>
				</Image>

				<Image
				style={styles.logoStyle}
				source={fibsLogo}>
				</Image>

				<CardSection style={styles.cardSelectStyle}>
					<Button onPress={() => Actions.listSurvey()}>
						Surveys
					</Button>
				</CardSection>

				<CardSection style={styles.cardSelectStyle}>
					<Button>
						Users
					</Button>
				</CardSection>
			</Card>
		</ImageBackground>
		)
	}
}

const styles = {
	cardSelectStyle:{
		marginLeft: 15,
		marginRight: 15,
		backgroundColor: null,
		borderBottomWidth: 0,
	},
	imageStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	viewStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	},
	whiteStyle: {
		position: 'absolute',
		width: '100%',
		height: '100%'
	},
	logoStyle:{
		width: '50%',
		resizeMode: 'contain',
  }
}

export default MainMenu
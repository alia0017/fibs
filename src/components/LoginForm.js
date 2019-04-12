import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { Button, Card, CardSection, Input, Spinner} from './common';
import { emailChanged, passwordChanged, loginUser} from '../actions/index'

const  backImage = require('../assets/fibs_background.png')
const  whiteBack = require('../assets/white_background.png')
const  fibsLogo = require('../assets/fibs_logos.png')


/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * LoginForm Component: The Authorization page of the application
 */
class LoginForm extends Component {

	/**
	 * Sends the change in text to the component properties
	 */
	onEmailChange(text){
		this.props.emailChanged(text)
	}

	/**
	 * Sends the change in text to the component properties
	 */
	onPasswordChange(text){
		this.props.passwordChanged(text)
	}

	/**
	 * Sends the button press to the component properties
	 */
	onButtonPress(){
		const { email, password } = this.props
		this.props.loginUser({ email, password })
	}

	/**
	 * Helper Method that displays error
	 */
	renderError(){
		if (this.props.error){
			return (
				<View style={{backgroundColor: 'white'}}>
					<Text style={styles.errorTextStyle}>
					{this.props.error}
					</Text>
				</View>
			)
		}
	}
	
	/**
	 * Helper Method that displays button
	 */
	renderButton(){
		if (this.props.loading){
			return <Spinner size="large" />
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		)
	}

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

					<CardSection style={styles.textStyle}>
						<Input
						label="Email:"
						placeholder="greg@smith.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
						/>
					</CardSection>

					<CardSection style={styles.textStyle}>
						<Input
						secureTextEntry
						label="Password:"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
						/>
					</CardSection>

					{this.renderError()}

					<CardSection style={styles.buttonStyle}>
					{this.renderButton()}
					</CardSection>
				</Card>
			</ImageBackground>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	textStyle:{
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: null
	},
	buttonStyle:{
		borderBottomWidth: 0,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: null
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

/**
 * Maps the state to the components properties
 */
const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth
	return { email, password, error, loading }
}

/**
 * Exports the the user action with redux connect
 */
export default connect(mapStateToProps, { 
	emailChanged, passwordChanged, loginUser 
})(LoginForm)
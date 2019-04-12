/**
 * Imported Libraries 
 */
import React from 'react'
import { View } from 'react-native'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Component: CardSection component to be called
 */

const CardSection = (props) => {
	return (
		<View style={[styles.containerStyle, props.style]}>
			{props.children}
		</View>
	)
}

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
}

export { CardSection }

/**
 * Imported Libraries 
 */
import React from 'react'
import { View, ActivityIndicator } from 'react-native'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Component: Spinner component to be called
 */

const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={size || 'large'} />
		</View>
		)
}

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export { Spinner }
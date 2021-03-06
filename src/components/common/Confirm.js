/**
 * Imported Libraries 
 */
import React from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Component: Confirmation component to be called
 */

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { cardSectionStyle, containerStyle, textStyle } = styles
    return(
        <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => {}}>
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>YES</Button>
                    <Button onPress={onDecline}>NO</Button>
                </CardSection>
            </View>
        </Modal>
    )
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm }
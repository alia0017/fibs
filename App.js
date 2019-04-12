/**
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * FIBS_Communities Splash Screen
 */

import React from 'react'
import { ImageBackground, Image, View } from 'react-native'
const  backImage = require('./src/assets/fibs_background.png')
const  whiteBack = require('./src/assets/white_background.png')
const  fibsLogo = require('./src/assets/fibs_logos.png')

const App = () => {
  return (
    <ImageBackground 
    style={styles.imageStyle}
    source={backImage}>
      <View style={styles.viewStyle}>
       <Image 
          style={styles.whiteStyle}
          source={whiteBack}>
        </Image>

        <Image
          style={styles.logoStyle}
          source={fibsLogo}>
        </Image>
      </View>
    </ImageBackground>
  )
}

const styles = {
    imageStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewStyle: {
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
      position: 'absolute',
      width: '50%',
      resizeMode: 'contain',

    }
}

export default App
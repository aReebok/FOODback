import React from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import HomeC from './library/HomeC' //not sure about this line

const stackNavigator = createStackNavigator({
  HomeC:HomeC
})

const AppCarousel = createAppContainer(stackNavigator)
export default AppCarousel
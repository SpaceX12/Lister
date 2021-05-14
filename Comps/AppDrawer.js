import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeSc from '../Screens/HomeSc'

export const AppDrawerNavigator = createDrawerNavigator({
    Home_Screen:{
        screen : HomeSc
    }
},
{
    initialRouteName:'Home_Screen'
})
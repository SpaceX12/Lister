import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ListSc from '../Screens/ListSc'

export const AppDrawerNavigator = createDrawerNavigator({
    List_Screen:{
        screen : ListSc
    }
},
{
    initialRouteName:'List_Screen'
})
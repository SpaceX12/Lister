import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import HomeSc from './Screens/HomeSc';
import { AppDrawerNavigator } from './Comps/AppDrawer'


export default function App(){
    return(
        <AppContainer/>
    );
}

const switchNavigator = createSwitchNavigator({
    Home_Screen : {screen:HomeSc},
    Drawer: {screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);
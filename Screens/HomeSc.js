import * as React from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HomeSc extends React.Component{
 
    render(){
        return(
            <View>
                <Image>
                    style={StyleSheet.styles}
                    source={{
                      uri:  "../Images/List.png"
                    }}
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageIc : {
        height:RFValue(10),
        width:RFValue(10),
        alignContent:'center'
    }
})
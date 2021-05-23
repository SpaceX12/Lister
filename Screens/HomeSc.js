import * as React from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet, ScrollView} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HomeSc extends React.Component{
 
    constructor(){
        super();
        this.state = ({
            isMVisible : false
        })
    }

    showModal = () =>{
        return(
            <Modal  
                animationType = 'slide'
                visible = { this.state.isMVisible }
                transparent = { true }
            >
                <View>
                    <ScrollView>
                        <Text style={styles.title}> Instructions </Text>

                        <Text style={styles.inst}>

                            Press on the 'Countinue' button 
                            to make your very first list!

                        </Text>

                        <TouchableOpacity style={styles.button}
                        onPress={this.setState({
                            isMVisible : false
                        })}/>
                    </ScrollView>
                </View>
            </Modal>

            
        );
    }


    render(){
        return(
            <View>
                <Image style = {styles.imageIc}
                    source={require('../Images/List.png')}
                />

                <TouchableOpacity 
                    onPress={
                        this.setState({
                            isMVisible : true
                        })
                    }
                >
                    <Text style={styles.inst}>Instructions</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.props.navigation.navigate('List_Screen')}
                ><Text>Continue</Text></TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageIc : {
        height:RFValue(10),
        width:RFValue(10),
        alignContent:'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: RFValue(5),
        color: 'grey'
    },
    inst:{
        fontStyle:'italic',
        fontSize:2
    }
})
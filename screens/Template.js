import * as React from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class LoginScreen extends React.Component {
render(){
    return(
        <View>
            <Text>
            LOGIN    
            </Text>
        </View>
    )

}
}
const styles = Stylesheet.create({
    container: {flex:1, backgroundColor:"#EDF67D", justifyContent:'center', alignItems:'center'},
    textInput: {borderWidth:2, borderColor:"#724CF9", width: 200, height:50, marginTop:25}
})
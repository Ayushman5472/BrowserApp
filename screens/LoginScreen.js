import * as React from 'react';
import {Text, TouchableOpacity, View, TextInput, StyleSheet} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class LoginScreen extends React.Component {
render(){
    return(
        <View style = {styles.container}>
            <Text style={styles.header}>
            Welcome!
            </Text>
            <TextInput placeholder={"Email ID"} keyboardType={'email-address'} style={styles.textInput}/> 
            <TextInput placeholder={"Password"} secureTextEntry={true} style={styles.textInput}/>
            <TouchableOpacity style={styles.touchableOpacity}><Text style={styles.text}>Enter!</Text></TouchableOpacity>
        </View>
    )

}
}
const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:"#EDF67D", justifyContent:'center', alignItems:'center'},
    textInput: { borderColor:"#724CF9", width: 200, height:50, marginTop:25, textAlign:'center', borderBottomWidth:2},
    header: {fontWeight:'bold', color:"#724CF9", fontSize:72},
    touchableOpacity:{backgroundColor:'#724CF9',width:150, height:50, borderRadius:20, shadowColor:'grey', marginTop:50, justifyContent:'center', alignItems:'center', shadowOffset:{width:0, height:10}, shadowRadius:5, shadowOpacity:0.8},
    text:{color:"#EDF67D", fontSize:'20', fontWeight:'bold'}
})
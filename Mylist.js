import React from 'react';
import { View , Text , Image ,  TouchableOpacity , StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

state = {
  language: 'English',
};

const Mylist = () => {
  

   
    return (
      
      <View style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>

          <View style={{
        backgroundColor: 'darkblue',
        width: 360,
        height: 25,
          }}></View>

        <View  style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
          }}> 
        
       
        <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 200}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="English" value="eng" />
  <Picker.Item label="Urdu" value="ur" />
</Picker>
 
          <Text> زبان تبدیل کریں</Text>
          </View>



        <Image source={require('./assests/drawable-xxxhdpi/logo.png')} />
          <Text style = {styles.textSizeFont}> Apni dukan sy online beycho</Text>
         

        <Image source={require('./assests/drawable-xxxhdpi/illustration.png')} />
     
        <TouchableOpacity  >
          <View style ={styles.buttonCreate}
          >
            <Text style ={styles.buttonTextCreate}> Create Webstore </Text>
             </View>
        </TouchableOpacity>

        <TouchableOpacity  >
          <View style ={styles.button}
          >
            <Text style ={styles.buttonText}> Login </Text>
             </View>
        </TouchableOpacity>

      </View>

    );
};

const styles = StyleSheet.create(
  {
    button: {
      borderRadius : 5,
      paddingHorizontal: 10,
      paddingVertical : 14,
      backgroundColor : "white",
      borderColor: 'skyblue',
      borderWidth: 1,
      width: 300,
      marginBottom: 20,
      
    },
    buttonText: {
      color: "skyblue",
      textTransform: "capitalize",
      textAlign: "center",
      fontSize : 24,
    }, 
    buttonCreate: {
      borderRadius : 5,
      paddingHorizontal: 10,
      paddingVertical : 14,
      backgroundColor : "skyblue",
      width: 300,
      
    },
    buttonTextCreate: {
      color: "white",
      textTransform: "capitalize",
      textAlign: "center",
      fontSize : 24,
    },
    textSizeFont :
    {
      fontSize : 22,
      color: "black"
    }
  }
)

export default Mylist;
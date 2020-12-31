import React, {useState} from 'react';
import { View , Text , Image , TextInput, FlatList,
   ScrollView,TouchableOpacity , StyleSheet, Button} from 'react-native';

import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchFunction from './SearchFunction'
import SecondTask from './SecondTask'
import SecondTaskTesting from './SecondTaskTesting'
import ClassSearchFunction from './ClassSearchFunction'
import StackTest from './StackTest'
import ThirdTaskTesting from './ThirdTaskTesting';


function HomeScreen({ navigation }) {
  return (
    <View>
      <SecondTaskTesting/>
     
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ThirdTaskTesting/>
      
    </View>
  );
}


const Stack = createStackNavigator();
const App = () => {
return(
  
<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Purchase History',
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} 
        options = {{title: 'Order Details' , headerStyle: { backgroundColor: 'darkblue',},
          headerTintColor:'white', headerTitleStyle: 'bold' }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  


  )
}
export default App;
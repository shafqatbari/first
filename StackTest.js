import React, {useState} from 'react';
import { View , Text , Image , TextInput, FlatList,
   ScrollView,TouchableOpacity , StyleSheet, Button} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
       <Button
        title="Go to Third"
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
function ThirdScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Third Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
} 

const Stack = createStackNavigator();

const StackTest = () => {
return(
  
<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default StackTest;
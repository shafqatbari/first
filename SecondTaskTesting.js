import React, {useState} from 'react';
import { View , Text , Image , TextInput, FlatList,
   ScrollView,TouchableOpacity ,Button,StyleSheet} from 'react-native';  

import { NavigationContainer, useNavigation  } from '@react-navigation/native';

import NumberFormat from 'react-number-format';
import { createStackNavigator } from '@react-navigation/stack';




const SecondTaskTesting = () => {

  const navigation = useNavigation();
  
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  
  
  const [people , setpeople] = useState([
    { name : 'Muhammad Imran Sup...', price : 3000000, date : '31-08-2020' , time : '9:30 AM', itemsno : '10 items' , oname : 'Jamshaid Saleem',upby : '', key : '1'},
    { name : 'My Self' ,price : 40000, date : '31-08-2020' , time : '9:40 AM' ,itemsno : '15 items' ,oname : 'Ali Raza', upby : 'Usman Jamil', key : '2'}, 
    { name : 'Usman Super Store' ,price : 40000, date : '31-08-2020' , time : '10:00 AM' ,itemsno : '15 items' , oname : 'Jamshaid Saleem ',upby : '',key : '3'},
    { name : 'My Self' ,price : 40000, date : '31-08-2020' , time : '9:00 AM' ,itemsno : '20 items' , oname : 'Usman Jamil',upby: '', key : '4'},
    { name : 'Khurram Super Store', price : 40000, date : '31-08-2020' , time : '9:30 AM', itemsno : '10 items' , oname : 'Jamshaid Saleem',upby: '', key : '5'},
     { name : 'Beta' ,price : 40000, date : '31-08-2020' , time : '9:40 AM' ,itemsno : '15 items' ,oname : 'Ali Raza',upby: '', key : '6'},
     { name : 'Charli' ,price : 20000, date : '31-08-2020' , time : '10:00 AM' ,itemsno : '15 items' , oname : 'Usman Jamil ',upby: '',key : '7'},
     { name : 'Delta' ,price : 40000, date : '31-08-2020' , time : '9:00 AM' ,itemsno : '20 items' , oname : 'Usman Jamil',upby: '',key : '8'},
     { name : 'Awais' ,price : 80000, date : '31-08-2020' , time : '10:00 AM' ,itemsno : '15 items' , oname : 'Usman Jamil ',upby: '',key : '9'},
     { name : 'Usman' ,price : 40000, date : '31-08-2020' , time : '9:00 AM' ,itemsno : '20 items' , oname : 'Usman Jamil',upby: '',key : '10'},
     { name : 'Ali' ,price : 90000, date : '31-08-2020' , time : '10:00 AM' ,itemsno : '15 items' , oname : 'Usman Jamil ',upby: '',key : '11'},
     { name : 'Bilal' ,price : 40000, date : '31-08-2020' , time : '9:00 AM' ,itemsno : '20 items' , oname : 'Usman Jamil',upby: '',key : '12'},
     { name : 'Ali' ,price : 1000, date : '31-08-2020' , time : '10:00 AM' ,itemsno : '15 items' , oname : 'Usman Jamil ',upby: '',key : '13'},
     { name : 'Bilal' ,price : 40000, date : '31-08-2020' , time : '9:00 AM' ,itemsno : '999 items' , oname : 'Usman Jamil',upby: '',key : '14'},
     { name : 'Ali' ,price : 65000,date : '31-08-2020' , time : '10:00 AM' ,itemsno : '15 items' , oname : 'Usman Jamil ',upby: '',key : '15'},
     { name : 'Bilal' ,price : 40000, date : '31-08-2020' , time : '9:00 AM' ,itemsno : '20 items' , oname : 'Usman Jamil',upby: '',key : '16'},
     { name : 'My Self' ,price : 1500, date : '31-08-2020' , time : '9:40 AM' ,itemsno : '15 items' ,oname : 'Ali Raza', upby: '',key : '17'},
     { name : 'Usman Super Store' ,price : 2500, date : '31-08-2020' , time : '10:00 AM' ,itemsno : '15 items' , oname : 'Usman Jamil ',upby: '',key : '18'},
     { name : 'My Self' ,price : 3700, date : '31-08-2020' , time : '9:00 AM' ,itemsno : '20 items' , oname : 'Usman Jamil',upby: 'Usman Jamil',key : '19'},
     { name : 'Khurram Super Store', price : 990, date : '31-08-2020' , time : '9:30 AM', itemsno : '10 items' , oname : 'Jamshaid Saleem',upby: '', key : '20'},
     
   ])



   let TotalOrders = 0
   people.forEach( item => { 
     TotalOrders = TotalOrders+1
   })
   
   function RNforms(value) {
    return (
      <NumberFormat
        value={value}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rs. '}
        renderText={formattedValue => <Text style = {{fontWeight: 'bold', fontSize : 16 }}>{formattedValue}</Text>}
      />
    );
  }

   searchItems = text => {
    let newData = people.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
    if(text.length >0 ){
      return itemData.indexOf(textData) > -1;
    }
    });
    setData(newData)
    setValue(text)
   
  };

  const ListFooter = () => {
    return (
      <View style={{height : 300 }}>
      </View>
    );
  };
  const ListHeader = () => {
    return (
      <View style={{ height: 10}}>
      </View>
    );
  };


  
    return (
      
      
<View  style = {{backgroundColor: 'white'}}>
{/* 
<View style = {{ backgroundColor: 'darkblue',
 width: 360,
  height: 60,
  flexDirection: 'row',
  padding: 15,

}}>

   <Image style = {{marginTop:5}}  source={require('./assests/secondtask/drawable-xxxhdpi/path.png')} /> 

   <Text style = {{color: 'white' , fontSize: 24 , paddingStart: 15}}>Purchase History</Text> 
   </View> */}

   <TouchableOpacity style = {{justifyContent: 'center', 
      marginTop: 20,}}>
          <View style ={styles.button  }
          >
            <Image style = {{marginTop : 13, marginStart: 5}} source = { require('./assests/secondtask/drawable-xxxhdpi/shape.png')} />
          <TextInput 
          style = {{fontSize: 24 , marginStart: 5}}
          placeholder= 'Store Name' 
          onChangeText = { (text)=> { searchItems(text)}

          }
          />

             </View>
      

        </TouchableOpacity>
     


      <View style = {{ flexDirection : 'row' , justifyContent: 'space-between' ,
      backgroundColor: '#f5f5f5' , paddingHorizontal: 20, height : 50,
       alignItems: 'center' , marginTop: 18 , borderTopWidth: 1, borderBottomWidth: 1 , borderColor:'lightgray'}}>
      <Text style ={{fontSize : 20}} >{TotalOrders} Orders</Text>  
      <Image source ={require('./assests/secondtask/drawable-xxxhdpi/rounded_rectangle_4.png')}/>
      </View>

      
    

    <FlatList  
      data={value=='' ? people: data}
      renderItem = {( {item})=> 
      
      (
        
      
        <View style = {{border : '1' , marginHorizontal : 25 ,
        marginVertical : 5 , borderWidth: 1 , borderRadius: 5, borderColor : 'lightgray' , padding: 5}}>
              <TouchableOpacity onPress = { () => navigation.navigate('Details')} >
          

          
          <View style = {{flexDirection : 'row' , justifyContent : 'space-between' ,}}>
          <Text style = {{fontWeight: 'bold' , fontSize : 16}}> {item.name} </Text>
          {RNforms(item.price)}
          </View>
          
          <View style = {{flexDirection : 'row', justifyContent : 'space-between' ,  marginHorizontal : 4 }}>
              <View style= {{flexDirection : 'row'}}>
              <Image   style ={{ marginTop : 3}} source = { require ( './assests/secondtask/drawable-xxxhdpi/date_copy.png')}/>
              <Text style= {{marginStart: 7 , color: 'gray'}}>{item.date} </Text>

              </View>
          
            <View  style= {{flexDirection : 'row' , marginEnd : 40}}>
             <Image style ={{ height: 18,  width: 18,}} source = { require ('./assests/clock.png')} />
             <Text style= {{marginStart: 3 ,color: 'gray'}}>{item.time} </Text>
             </View>


          <Text  style= {{ color: 'gray'}}>{item.itemsno} </Text>
          </View>

          <View style = {{flexDirection : 'row' ,marginVertical : 3,  marginHorizontal : 4 }}>
          <Image style ={{ marginTop : 3}} source = { require ('./assests/secondtask/drawable-xxxhdpi/user_copy.png')} />
          <Text style ={{color : 'gray', marginStart: 3}}> Order by : </Text>
          <Text style ={{color : 'gray'}}>{item.oname} </Text>
          </View>
         
          {!item.upby=='' ? (
            <View style={{flexDirection : 'row'  , marginBottom: 3,marginHorizontal : 4 }}>
          <Image style ={{ marginTop : 3}} source = { require ('./assests/secondtask/drawable-xxxhdpi/user_copy.png')} />
          <Text style ={{color : 'gray', marginStart: 3}}> Updated by : </Text>
          <Text style ={{color : 'gray'}}>{item.upby}  </Text>
          </View>

        ) : null}
        
         
        
          {/* <View style={{flexDirection : 'row'  , marginBottom: 3,marginHorizontal : 4 }}>
          <Image style ={{ marginTop : 3}} source = { require ('./assests/secondtask/drawable-xxxhdpi/user_copy.png')} />
          <Text style ={{color : 'gray', marginStart: 3}}> Updated by : </Text>
          <Text style ={{color : 'gray'}}>{item.oname} </Text>


          </View> */}




          

          </TouchableOpacity>

        </View>

      )   
      }

      
      ListFooterComponent={ListFooter}

      ListHeaderComponent={ListHeader}
     />



{/*      
      <ScrollView>



       { people.map((item) => {

        return (
      
          <View key = {item.key} style = {{border : '1' , marginHorizontal : 25 ,
          marginVertical : 5 , borderWidth: 1 , borderColor : 'lightgray' , padding: 5}}>
          </View>
          
         
        )
      })
      } 
      </ScrollView> */}

      </View>
    );
};

const styles = StyleSheet.create(
  {
    button: {
      borderRadius : 5,
      paddingHorizontal: 10,
      paddingVertical : 1,
      backgroundColor : "white",
      borderColor: 'lightgray',
      borderWidth: 1,
      width: 320,
      flexDirection: 'row',
      marginHorizontal: 20
      
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

export default SecondTaskTesting;
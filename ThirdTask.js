import React, {useState} from 'react';
import { View , Text , Image , TextInput, FlatList,
   ScrollView,TouchableOpacity , StyleSheet, Button} from 'react-native';
import NumberFormat from 'react-number-format';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNformat from './RNformat'

const ThirdTask = () => {

    const [orderdata, setorderdata] = useState ([
        {name : 'Nestle Milkpack UHT 27z250ml 12% PK' , unit : '12 units, 3 cartons', price : 2977, key: '1'},
        {name : 'Nestle Yogourt 8' ,unit : '4 units',price : 100, key: '2'},
        {name : 'Prema Milk' ,unit : '3 units',price : 30000, key: '3'},
        {name : 'Prema milk 2% grade lowfat 1602 edition ' ,unit : '6 units', price : 100,key: '4'},
        {name : 'Dairy Milk 30' , unit : '10 units',price : 100, key: '5'},
        {name : 'Chips 100' ,unit : '8 units',price : 100, key: '6'},
        {name : 'Dairy Milk Medium' , unit : '7 units', price : 100,key: '7'},
        {name : 'Nestle Yogourt 8' , unit : '13 units', price : 100,key: '8'},
        {name : 'Nestle Yogourt 8' ,unit : '10 units',price : 100, key: '9'},
        {name : 'Prema Milk' , unit : '3 units', price : 100,key: '10'},
        {name : 'Butter' ,unit : '1 units', price : 100,key: '11'},
        {name : 'Dairy Milk 30' ,unit : '12 units',price : 100, key: '12'},
        {name : 'Chips 100' ,unit : '13 units', price : 100,key: '13'},
        {name : 'Dairy Milk Medium' ,unit : '14 units', price : 100,key: '14'},
])
 var String 
const [orderitems , setorderitems] = useState(9)
const [Tprice , setTprice] = useState(0)
let sum=0
let itemsum= 0
orderdata.forEach(item => {
    sum+= item.price
    itemsum= itemsum+1
    
});


function RNformt(value) {
    return (
      <NumberFormat
        value={value}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rs '}
        renderText={formattedValue => <Text style = {{fontSize : 22, fontWeight: 'bold',color: 'white', }}>{formattedValue}</Text>}
      />
    );
  }
  function RNformt2(value) {
    return (
      <NumberFormat
        value={value}
        displayType={'text'}
        thousandSeparator={true}
        renderText={formattedValue => <Text style = {{fontSize : 20, fontWeight : 'bold' }}>{formattedValue}</Text>}
      />
    );
  }


const ListFooter = () => {
    return (
      <View  style={{flexDirection : 'column' }}>
          <TouchableOpacity style = {{  height : 60,borderRadius : 6,justifyContent: 'center', alignItems: 'center',
                backgroundColor : 'skyblue', marginTop: 20, marginHorizontal: 20 }}>
                    <Text  style={{fontSize : 26, color : 'white' }} >Reorder</Text>
                        
            </TouchableOpacity>

            <View  style={{flexDirection : 'row', justifyContent: 'space-evenly',alignItems: 'center',marginVertical: 20 ,height: 70,backgroundColor : 'darkblue'}}>
                <Text style = {{ fontWeight: 'bold',fontSize : 22, color : 'white'}} >
                    TOTAL  
                </Text>
                <Text style={{backgroundColor: 'skyblue',height : 70,width: 0.5}}></Text>
            
                
                {RNformt(sum)}


            </View>

      </View>
    );
  };
  const ListHeader = () => {
    
    return(
        <View></View>
    )
  };


return(
  <View style={{ flex: 1 ,flexDirection : 'column' , backgroundColor: 'white'}}>
      <View style = {{ flexDirection : 'row', padding: 20}} >
             <View style = {{borderColor : 'gray', height : 80, width : 80, borderWidth : 1}}>
                 <Image style ={{
                    flex: 1,
                    width: 70,
                     height: 70,  marginStart : 3,
                     resizeMode: 'contain'}} source = { require('./assests/firsttask/drawable-xxxhdpi/logo.png')} />
                     
                                                    </View>
                        
      <View style = {{ flexDirection : 'column'}} >
            <Text style = {{marginStart: 10 ,fontSize: 20, width : 250,fontWeight : 'bold' ,flexWrap: 'wrap'}}>Muhammad Imran Super Store</Text>
            <Text style = {{fontSize: 16,marginTop: 15 , marginStart : 5,color : 'skyblue'}}> 178 Garden Town Lahore</Text>
            </View>

        </View>


        <View  style = {{ flexDirection : 'row', justifyContent: 'space-evenly' }} >
            <TouchableOpacity style = {{ borderWidth : 1,width : 150, height : 40,  alignItems: 'center',
                 borderRadius : 6, borderColor : 'skyblue' }}>
                     <Image style ={{flex : 1, width: 30, height: 30, resizeMode: 'contain'}} 
                        source = { require('./assests/thirdtask/WhatsappIcon.png')} />

            </TouchableOpacity>
            <TouchableOpacity style = {{ borderWidth : 1, height : 40, width : 150,borderRadius : 6, alignItems: 'center',
                borderColor : 'skyblue' }}>
                         <Image style ={{flex : 1, width: 30, height: 30, resizeMode: 'contain'}} 
                        source = { require('./assests/thirdtask/PhoneIcon.png')} />
            </TouchableOpacity>
            </View>
            <View style= {{backgroundColor: '#f0f0f0', borderTopWidth: 1, borderBottomWidth: 1, height: 50
        , marginTop: 30}}>
            <Text style={{paddingStart : 20, fontSize: 18, paddingTop:10}}>Order Items : {itemsum} </Text> 

          </View>

      

    <FlatList 
    data = {orderdata}
    
    
    renderItem =  { ({item}) => (

        <View style = {{ paddingVertical: 10,marginHorizontal: 10,borderColor: 'gray', borderBottomWidth : 1}} >
            <Text style={{fontSize : 22 , color: 'black'}}> {item.name}</Text>
            <View style = {{justifyContent : 'space-between', flexDirection: 'row',  marginTop : 20}}>  
                
            <Text  style={{fontSize : 16 , marginTop : 3, color: 'black'  }}> {item.unit}</Text>
            {RNformt2(item.price)}
             

            </View>
        </View>

        
    )



     }
    
     
    ListHeaderComponent= {ListHeader}
     ListFooterComponent= {ListFooter}
     />







  </View>

  )
}
export default ThirdTask;
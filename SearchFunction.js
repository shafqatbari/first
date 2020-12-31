import React, { Component, useState } from 'react';
import { View, Text, FlatList, TextInput, ListItem , Image} from 'react-native';

class SearchFunction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
    };
    
   

    this.arrayNew = [
      { name : 'Alpha', price : 'Rs. 3,00,000', date : '31-08-2020' , time : '9:30 AM', itemsno : '10 items' , oname : 'Jamshaid Saleem', key : '1'},
      { name : 'Beta' ,price : 'Rs. 40,000', date : '31-08-2020' , time : '9:40 AM' ,itemsno : '15 items' ,oname : 'Ali Raza', key : '2'},
      { name : 'Charli' ,price : 'Rs. 40,000', date : '31-08-2020' , time : '10:00 AM' ,itemsno : '15 items' , oname : 'Usman Jamil ',key : '3'},
      { name : 'Delta' ,price : 'Rs. 40,000', date : '31-08-2020' , time : '9:00 AM' ,itemsno : '20 items' , oname : 'Usman Jamil',key : '4'},
      { name : 'Awais' ,price : 'Rs. 40,000', date : '31-08-2020' , time : '10:00 AM' ,itemsno : '15 items' , oname : 'Usman Jamil ',key : '5'},
      { name : 'Usman' ,price : 'Rs. 40,000', date : '31-08-2020' , time : '9:00 AM' ,itemsno : '20 items' , oname : 'Usman Jamil',key : '6'},
      { name : 'Ali' ,price : 'Rs. 40,000', date : '31-08-2020' , time : '10:00 AM' ,itemsno : '15 items' , oname : 'Usman Jamil ',key : '7'},
      { name : 'Bilal' ,price : 'Rs. 40,000', date : '31-08-2020' , time : '9:00 AM' ,itemsno : '20 items' , oname : 'Usman Jamil',key : '8'},
      
    ];
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  searchItems = text => {
    let newData = this.arrayNew.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
    if(text.length >0 ){
      return itemData.indexOf(textData) > -1;
    }
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  renderHeader = () => {
    return (
      <TextInput
        style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
        placeholder="   Type Name..."
        onChangeText={text => this.searchItems(text)}
        value={this.state.value}
      />
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 25,
          width: '98%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
          
        <FlatList
          data={this.state.value=='' ? this.arrayNew : this.state.data}
          renderItem={({ item }) => (

            

        <View style = {{border : '1' , marginHorizontal : 25 ,
        marginVertical : 5 , borderWidth: 1 , borderColor : 'lightgray' , padding: 5}}>
          

          
          <View style = {{flexDirection : 'row' , justifyContent : 'space-between' ,}}>
          <Text style = {{fontWeight: 'bold' , fontSize : 16}}> {item.name} </Text>
          <Text style = {{fontWeight: 'bold'}}> {item.price} </Text>
          </View>
          
          <View style = {{flexDirection : 'row', marginVertical : 5 , justifyContent : 'space-between' ,  marginHorizontal : 10 }}>
          <Image  style ={{ marginTop : 3}} source = { require ( './assests/secondtask/drawable-xxxhdpi/date_copy.png')}/>
          <Text>{item.date} </Text>
          <Image style ={{ marginTop : 3}} source = { require ('./assests/secondtask/drawable-xxxhdpi/user_copy.png')} />
          <Text>{item.time} </Text>
          <Text>{item.itemsno} </Text>
          </View>

          <View style = {{flexDirection : 'row' ,marginVertical : 5,  marginHorizontal : 10 }}>
          <Image style ={{ marginTop : 3}} source = { require ('./assests/secondtask/drawable-xxxhdpi/user_copy.png')} />
          <Text> Order by : </Text>
          <Text>{item.oname} </Text>
          </View>


          


        </View>

          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default SearchFunction;
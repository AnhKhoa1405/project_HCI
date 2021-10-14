import React, { Component } from 'react'
import {
  TextInput,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import DateTimePikerModel from "react-native-modal-datetime-picker"

var width = Dimensions.get("window").width; //full widt
var height = Dimensions.get("window").height; //full height

export class Rent extends Component {
  constructor(props) {
    super(props);
    this.state = {
		visibility: false,
		DateDisplay:"",
	
    }
  }
	
	handleConfirm = (date) =>{
		let dayOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
		this.setState({DateDisplay: dayOfWeek[date.getDay()] +" " +date.getDate() + "/"+ parseInt(date.getMonth()+1) +"/"+date.getFullYear()});
    this.setState({visibility: false});
  }

	onPressCancel = () =>{
		this.setState({visibility:false})
	}

	onPressButton = () =>{
		this.setState({visibility:true})
	}
  

	 time = ["7h - 8h", "8h - 9h", "9h - 10h" , "15h - 16h" , "16h - 17h"]

   listTime = () =>{
	
	return this.time.map((element) => {
	
		return(
     <TouchableOpacity>
			<Text key={element}
                style={{ 
			 width: width/4,
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: "#f7f7f7",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#cec8c8",
			textAlign: "center", fontSize: 16, fontWeight: "600",
 }}
        //       onPress={changePrice(element)}
	      >
		      {element}
              </Text>
              </TouchableOpacity>
		)
	})
}
	render() {
		return (
      
			<View style={{padding:20}}>
<ScrollView>
        <Text style ={{fontSize: 20, fontWeight: "650",
      marginBottom:20}}>1. Địa chỉ sân</Text>
        <View style ={{flexDirection: "row"}}>
          <MaterialCommunityIcons
                  style={{
                    marginRight: 2,
                  }}
                  name="map-marker"
                  size={24}
                  color="#3ac5c9"
                />
        <Text style = {{fontSize: 16, fontWeight: "600"}}>71 Cúc Lạc Quận Tân Bình Thành Phố HN</Text>
        </View>

        <Text style ={{fontSize: 20, fontWeight: "650",marginTop:20,
      marginBottom:20}}>2. Chọn ngày , giờ </Text>
       <View style ={{}}>
         <Text style ={{fontSize: 16, fontWeight: "600",marginBottom:20}}>Chọn ngày đặt:</Text>
         <TouchableOpacity style ={{paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 20,
                backgroundColor: "#f7f7f7",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#cec8c8",
                flexDirection: "row",
                zIndex:100,marginBottom:20
                }}
                onPress={this.onPressButton}>
           <MaterialCommunityIcons
                  style={{
                    
                    marginRight: 10,
                  }}
                  name="calendar"
                  size={24}
                  color="#3ac5c9"
                />
			<Text style ={{
                
			textAlign: "center", fontSize: 16, fontWeight: "600",
		}}
    >{this.state.DateDisplay}</Text>
    </TouchableOpacity>
			<DateTimePikerModel isVisible = {this.state.visibility}
			onConfirm = {this.handleConfirm} onCancel = {this.onPressCancel}
			
			mode = "date" 
			/>
     
		</View>
			<Text style= {{ fontSize: 16, fontWeight: "600",
		
	}}>Chọn giờ :</Text>
				<ScrollView horizontal ={true} showsHorizontalScrollIndicator={false}>
		<View style ={{ flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop:20,
		marginLeft:5
	}}>
		
		{this.listTime()}
		
		
		
		</View></ScrollView>
    <Text style= {{ fontSize: 16, fontWeight: "600", marginTop:20, marginBottom:20
		
	}}>Ghi chú :</Text>
     <TextInput
      style={{backgroundColor: "#f7f7f7",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#cec8c8",
              padding:5,}}
      underlineColorAndroid="transparent"
      placeholder="Type something"
      placeholderTextColor="grey"
      numberOfLines={4}
      multiline={true}
      
    />
    <View style ={{ alignItems: "center"}}>
    <TouchableOpacity
              style={{
                width: width / 2,
                marginTop: 20,
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 5,
                // borderColor: "red",
                borderWidth: 2,
                borderColor: "#3ac5c9",
                
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "RobotoMedium",
                  color: "#3ac5c9",
                  fontWeight: "700",
                }}
              >
                Hoàn tất
              </Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
			</View>
		)
	}
}

export default Rent

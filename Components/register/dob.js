import React, {useState} from 'react';
import {View, Button, Platform,Text,StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native";


export default function Dob({navigation}){
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [selectedDate, setselectedDate] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
     
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
      const handleDate = (date) => {
        setselectedDate(date.toDateString());
        hideDatePicker();
      };
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  

    return(
        <View style={{backgroundColor:'#d7edf0', height:800}}>
        <Text style={{marginTop:240,marginLeft:60, fontSize:25,fontWeight:'bold',marginBottom:100}}>Specify Your Date of Birth</Text>
       
        <View>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDate}
                onCancel={hideDatePicker}
                minimumDate={new Date()}
                maximumDate={new Date()}
            />
          </View>
          <View>
            <Text style={{paddingTop:60, paddingLeft:100, fontSize:25}}>{selectedDate}</Text>
            </View>
            <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Next"
             onPress={()=>navigation.navigate('KG')}
             
          />
        </View>
            </View>
        
    );
}
const styles = StyleSheet.create({
    styleBtn1: {
      marginTop: 180,
      marginLeft: 30,
      marginRight: 30,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#86bac1", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
    },
    dob:{
        marginLeft: 30,
        marginRight: 30,
        borderRadius:50
        
    }})
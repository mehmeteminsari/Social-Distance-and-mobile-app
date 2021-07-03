import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";
import { useSelector,useDispatch } from "react-redux";
import { getSquare } from "../action/cityAction";

const DistSelect = (props) => {
  const state = useSelector(state => state.distListReducer)
  const dispatch = useDispatch();
  
  const {dist,loading,error} = state;
  
  const handleSelect = (distId) => {
    props.setSelectDist(distId);
    dispatch(getSquare(distId))
    
  }
  return (
    <View>
      <RNPickerSelect
        onValueChange={(value) =>handleSelect(value)}
        placeholder={{
          label: "İlçe Seçiniz",
          value: null,
          color: "black",
        }}
        items={
          dist ? dist.map((item,index) =>(
            {label:item.name,value:item.id,key:index}
          )) :  ([{ label: "bos", value: "bos" }])
        }
        
        style={{
          ...pickerSelectStyles,

          iconContainer: {
            top: 10,
            right: 20,
          },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
          return <AntDesign name="down" size={24} color="white" />;
        }}
      />
    </View>
  );
};

export default DistSelect;


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    color: "white",

    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    padding: 8,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "white",

    paddingRight: 30, // to ensure the text is never behind the icon
  },
});


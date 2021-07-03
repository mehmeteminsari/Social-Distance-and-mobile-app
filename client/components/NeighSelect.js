import React from "react";
import { StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";
import {  useSelector } from "react-redux";

const NeighSelect = React.memo((props) => {
  const state = useSelector(state => state.squareListReducer)

  const {square,loading,error} = state;


  return (
    <View>
      <RNPickerSelect
        onValueChange={(value) =>props.setSelectSquare(value)}
        placeholder={{
          label: "Meydan Seçiniz",
          value: null,
          color: "black",
        }}
        items={
          square ? square.map((item, index) => (
            { label: item.name, value: item.id, key: index }
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
});

export default NeighSelect;


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


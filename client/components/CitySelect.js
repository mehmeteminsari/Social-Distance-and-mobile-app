import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";

import { getCity, getDist } from "../action/cityAction";
import { useDispatch, useSelector } from 'react-redux';


const CitySelect = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity())
  }, [dispatch]);

  const cityListReducers = useSelector(state => state.cityListReducer)
  const { city, loading, error } = cityListReducers;

  const handleSelect = (cityId) => {
    props.setSelectCity(cityId);
    dispatch(getDist(cityId))
  }

  return (
    <View>
      <RNPickerSelect
        onValueChange={(value) => handleSelect(value)}
        placeholder={{
          label: "Şehir Seçiniz",
          value: null,
          color: "black",
        }}

        items={
          city ? city.map((item, index) => (
            { label: item.name, value: item.id, key: index }
          )) : ([{ label: "bos", value: "bos" }])
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

export default CitySelect;

const styles = StyleSheet.create({});
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


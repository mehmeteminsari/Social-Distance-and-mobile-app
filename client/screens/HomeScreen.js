import React, { useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import CitySelect from "../components/CitySelect";
import DistSelect from "../components/DistSelect";
import NeighSelect from "../components/NeighSelect";
import { AntDesign } from "@expo/vector-icons";



const HomeScreen = React.memo(({ navigation }) => {
  const [selectCity, setSelectCity] = useState("");
  const [selectDist, setSelectDist] = useState("");
  const [selectSquare, setSelectSquare] = useState("");





  const handleClick = () => {
    if (selectCity == null) {
      Alert.alert("Uyarı", "Şehir Seçiniz");
    } else if (selectDist == null) {
      Alert.alert("Uyarı", "İlçe Seçiniz");
    } else if (selectSquare == null) {
      Alert.alert("Uyarı", "Meydan Seçiniz");
    } else {

      navigation.navigate("Detail", {
        selectCity: selectCity,
        selectDist: selectDist,
        selectSquare: selectSquare,
      });
    };

  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="exclamationcircleo" size={24} color="white" />
        <Text style={{ fontSize: 16, color: "white" }}>
          Maske ve Mesafe kurallarına dikkat ediniz.
        </Text>
      </View>
      <View style={{ height: '70%', width: '85%', justifyContent: 'space-around', backgroundColor: '#5D91D6', borderRadius: 20, marginTop: 10, alignItems: 'flex-end' }}>
        <View style={styles.content}>
          <CitySelect setSelectCity={setSelectCity} />
          <DistSelect setSelectDist={setSelectDist} />
          <NeighSelect setSelectSquare={setSelectSquare} />
        </View>
        <View>
          <TouchableOpacity onPress={handleClick} style={styles.detailButton}>
            <Text style={{ color: "white" }}>Risk Göster</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 0,
    backgroundColor: "#153452",
  },
  header: {
    flex: 0.3,
    backgroundColor: "#254B71",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 0
  },
  content: {
    flex: 0.6,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },
  detailButton: {
    backgroundColor: "#153452",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: '70%',
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'white'
  },
});

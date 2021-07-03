import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Animated, StyleSheet, Text, View } from "react-native";
import axios from "axios";




const DetailScreen = React.memo(({ route }) => {
  const cityName = route.params.selectCity;
  const distName = route.params.selectDist;
  const squareId = route.params.selectSquare;
  // const dispatch = useDispatch()
  const [detail, setDetail] = useState([]);





  
  const data = useSelector(state => state.cityListReducer);
  const distReducer = useSelector(state => state.distListReducer);

  const { city } = data;
  const { dist } = distReducer;
  // const {detail,loading,error} = state;

  
  
  //2. useEffect emin kullandı ben kullanmadım
  useEffect(() => {
    const getDetails = async (squareId) => {
      await axios.get(`http://192.168.1.2:5000/city/squareself/${squareId}`)
        .then(res => setDetail(res.data))
    }
    getDetails(squareId);
  }, [detail])


  let bulunanIl = city && city.filter(city => city.id === cityName);
  let bulunanIlce = dist && dist.filter(dist => dist.id === distName);

  let cityDetailName = ""
  bulunanIl && bulunanIl.map(item => {
    cityDetailName = item.name;
  })

  let distDetailName = ""
  bulunanIlce && bulunanIlce.map(item => {
    distDetailName = item.name;
  })


  
  let selectName = ""
  let area = ""
  let numPeople = ""
  let numViolation = ""
  detail && detail.map(item => {
    selectName = item.name
    area = item.area
    numPeople = item.num_people
    numViolation = item.num_violation
  })

  let kapasite = area / (1.5 * 1.5)
  let sonuc = (numPeople / kapasite) * 100

  let riskorani = numViolation / numPeople * 100


  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1700,
        useNativeDriver: true,
      }
    ).start();
    
  },[fadeAnim]);

  
  return (
    <View style={styles.container}>
      <View style={styles.tupe}>
        <Text style={styles.data}>İL:{cityDetailName} </Text>
        <Text style={styles.data}>İLÇE:{distDetailName} </Text>
        <Text style={styles.data}>MEKAN:{selectName}</Text>

      </View>
      <View style={{ flex: 1, width: '85%', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#5D91D6', borderRadius: 20 }}>
        {/* <Text style={styles.data}>Risk Orani: %17</Text>
        <Text style={styles.data}>Insan Sayisi: 243 </Text>
        <Text style={styles.data}>Sosyal Mesafe Ihlal Sayisi: 34 </Text> */}

        {/* RISK ORANI KISMI */}
        <View style={{ height: '50%', width: '50%', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: 'white', marginTop: 7 }} >Risk Orani</Text>

          <Animated.View style={{ height: 130, width: 130, backgroundColor: '#4A7DC2', marginTop: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'white', opacity: fadeAnim }}>
            <Text style={{ color: 'white', fontSize: 20 }}>%{riskorani?riskorani.toFixed(2):0}</Text>
          </Animated.View>

        </View>

        {/* INSAN SAYISI KISMI */}
        <View style={{ height: '50%', width: '50%', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: 'white', marginTop: 7 }} >Insan Sayisi</Text>

          <Animated.View style={{ height: 130, width: 130, backgroundColor: '#4A7DC2', marginTop: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'white', opacity: fadeAnim }}>
            <Text style={{ color: 'white', fontSize: 20 }}>{numPeople}</Text>
          </Animated.View>

        </View>
        {/* SOSYAL MESAFE IHLAL KISMI */}
        <View style={{ height: '50%', width: '50%', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: 'white', marginTop: 7 }}>Sosyal Mesafe Ihlal Sayisi</Text>

          <Animated.View style={{ height: 130, width: 130, backgroundColor: '#4A7DC2', marginTop: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'white', opacity: fadeAnim }}>
            <Text style={{ color: 'white', fontSize: 20 }}>{numViolation}</Text>
          </Animated.View>

        </View>
        {/* DOLULUK ORANI */}
        <View style={{ height: '50%', width: '50%', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: 'white', marginTop: 7 }} >Doluluk Orani</Text>

          <Animated.View style={{ height: 130, width: 130, backgroundColor: '#4A7DC2', marginTop: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'white', opacity: fadeAnim }}>
            <Text style={{ color: 'white', fontSize: 20, }}>%{sonuc?sonuc.toFixed(2):0}</Text>
          </Animated.View>
        </View>
      </View>
    </View>
  );
});

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#153452",
    alignItems: 'center',


  },
  data: {
    color: 'white',
    fontSize: 17,
    marginTop: 8,
    marginLeft: 20,
  },
  tupe: {
    height: 'auto',
    width: '85%',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: '#5D91D6',
    paddingVertical:10
    

  },
  oval: {
    flex: 1,


  }
});


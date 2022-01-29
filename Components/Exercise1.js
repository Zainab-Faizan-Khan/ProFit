import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Exercise1 = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={{ backgroundColor: "#d7edf0", height: 2000 }}>
      <View
        style={{
          height: hp("26%"),
          width: wp("100%"),
          backgroundColor: "grey",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          marginRight: 20,
          marginTop: hp("4%"),
          position: "absolute",
          borderColor: "grey",
        }}
      >
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image source={require("../assets/i1.jpg")} style={styles.i1} />
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            marginLeft: wp("40%"),
            color: "black",
            fontWeight: "bold",
            fontSize: 30,
            fontStyle: "italic",
            marginTop:hp("6%")
          }}
        >
          Beginner's Level 
        </Text>
        <Text
          style={{
            position: "absolute",
            marginLeft: wp("60%"),
            color: "black",
            fontWeight: "bold",
            fontSize: 30,
            fontStyle: "italic",
            marginTop:hp("9%")
          }}
        >
          Exercises
        </Text>
      </View>
      <ModalPoup visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Entypo
                name="cross"
                size={28}
                color="black"
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ marginVertical: 4, fontSize: 28, textAlign: "center" }}>
          How to get started
        </Text>
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={[
              { key: "1. Check your health" },
              { key: "2. Make a plan and set realistic goals" },
              { key: "3. Make it a habit" },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>
        <Text style={{ marginVertical: 4, fontSize: 20, textAlign: "center" }}>
          A few tips for beginners
        </Text>
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={[
              { key: "a. Stay hydrated" },
              { key: "b. Optimize your nutrition" },
              { key: "c. Warm up" },
              { key: "d. Cool down" },
              { key: "e. Listen to your body" },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>
      </ModalPoup>
      <View
        style={{
          backgroundColor: "#a5e1a0",
          marginTop: hp("40%"),
          height: hp("22%"),
          width: wp("40%"),
          marginLeft: wp("6%"),
          borderRadius: 20,
          position: "absolute",
        }}
      >
        <Image source={require("../assets/cardio.jpg")} style={styles.i2} />

        <Text
          style={{
            position: "absolute",
            marginLeft: 44,
            color: "black",
            fontWeight: "bold",
            fontSize: 37,
          }}
        >
          Cardio
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "orange",
          marginTop: hp("40%"),
          height: hp("22%"),
          width: wp("40%"),
          marginLeft: wp("54%"),
          position: "absolute",
          borderRadius: 20,
        }}
      >
        <Image source={require("../assets/skipping.jpg")} style={styles.i2} />

        <Text
          style={{
            position: "absolute",

            marginTop: hp("14%"),
            color: "white",
            fontWeight: "bold",
            fontSize: 33,
          }}
        >
          Skipping
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#84aaf9",
          marginTop: hp("70%"),
          height: hp("22%"),
          width: wp("40%"),
          marginLeft: wp("6%"),
          borderRadius: 20,
          position: "absolute",
        }}
      >
        <Image source={require("../assets/running.jpg")} style={styles.i2} />

        <Text
          style={{
            marginTop: hp("16%"),
            position: "absolute",
            marginLeft: 30,
            color: "white",
            fontWeight: "bold",
            fontSize: 33,
          }}
        >
          Running
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#f99c84",
          marginTop: hp("70%"),
          height: hp("22%"),
          width: wp("40%"),
          marginLeft: wp("54%"),
          position: "absolute",
          borderRadius: 20,
        }}
      >
        <Image source={require("../assets/plank.jpg")} style={styles.i2} />

        <Text
          style={{
            position: "absolute",
            marginLeft: 10,
            color: "black",
            fontWeight: "bold",
            fontSize: 29,
            marginTop:hp('2%')
          }}
        >
         Plank
        </Text>
      </View>
      <View style={styles.styleBtn1}>
          <Button
            color="#85bec5" //button color
             title="Back"
             onPress={()=>navigation.navigate('Main')}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#25a0af",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  i1: {
    height: hp("24%"),
    width: wp("100%"),
  borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
    
    marginTop: wp("2%"),
   
  },
  i2: {
    height: hp("20%"),
    width: wp("40%"),
    borderRadius: 25,
    marginTop: wp("2%"),
  },
  styleBtn1: {
    marginTop: hp('96%'),
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#86bac1", //button background/border color
    overflow: "hidden",
    marginBottom: 10,
  }
});

export default Exercise1;

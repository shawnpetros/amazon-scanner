import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Animated,
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useUpcState } from "../hooks";

export default function BarcodeScreen({ navigation }) {
  const screenHeight = Dimensions.get("window").height;
  const [animation] = useState(new Animated.Value(0));
  const [canUseCamera, setCanUseCamera] = useState(null);
  const [_, setUpc] = useUpcState();
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    getPermsAsync();
    setTimeout(animateOpen, 200);
  }, []);

  const animateOpen = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300
    }).start();
  };

  const handleBack = () => {
    animateClose(() => navigation.dismiss());
  };

  const animateClose = cb => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200
    }).start(cb);
  };

  const slideUp = {
    height: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, screenHeight * 0.3],
      extrapolate: "clamp"
    })
  };

  const getPermsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setCanUseCamera(status === "granted");
  };
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setUpc(data);
    handleBack();
  };
  return (
    <View style={styles.container}>
      {canUseCamera === null && <Text>Requesting camera permission</Text>}
      {canUseCamera === false && <Text>Permission to camera was denied</Text>}
      {canUseCamera && (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
        >
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFillObject]}
          />

          <View styles={styles.barcodeBox}></View>
          <View style={styles.barcodeBox} />
          <Animated.View style={[styles.bottomView, slideUp]}>
            <View>
              <TouchableOpacity
                style={styles.closeContainer}
                onPress={handleBack}
              >
                <View>
                  <Ionicons
                    style={styles.close}
                    name={Platform.OS === "ios" ? "ios-close" : "md-close"}
                    size={35}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.bottomViewHeader}>Scanner</Text>
              <Text style={styles.bottomViewText}>
                Scan an item barcode to add it to Santa's List!
              </Text>
            </View>
          </Animated.View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  closeContainer: {
    top: 20,
    right: 10,
    width: 55,
    height: 55,
    borderRadius: 55,
    alignSelf: "flex-end"
  },
  close: {
    textAlign: "center",
    right: 0
  },
  barcodeBox: {
    bottom: "25%",
    height: "25%",
    width: "90%",
    borderWidth: 4,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: 20,
    alignSelf: "center",
    alignContent: "flex-start"
  },
  bottomViewHeader: {
    marginTop: 45,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  bottomViewText: {
    margin: 10,
    textAlign: "center"
  },
  bottomView: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white"
  }
});

BarcodeScreen.navigationOptions = {
  header: null
};

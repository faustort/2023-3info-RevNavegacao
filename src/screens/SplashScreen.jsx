import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { styles } from "../utils/styles";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("TabsNavigation");
      } else {
        navigation.navigate("LoginScreen");
      }
    });

  }, [])

  // setTimeout(() => {
  //   navigation.navigate("TabsNavigation");
  // }, 500);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text>Aguarde um instante...</Text>
    </View>
  );
}

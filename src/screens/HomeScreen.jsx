import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      />

      <Text>Oi eu sou a Home</Text>
    </View>
  );
}

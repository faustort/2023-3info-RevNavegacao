import { View } from "react-native";
import { Paragraph, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
export default function RegisterScreen() {
  var nome = "Fausto";
  let nome2 = "Fausto"
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph>Realize o seu cadastro</Paragraph>
        <TextInput label={"E-email"} placeholder="Digite seu e-mail" />
        <TextInput placeholder="Digite sua senha" secureTextEntry={true} />
      </View>
    </View>
  );
}

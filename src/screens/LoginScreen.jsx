import { Image, View } from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "../utils/styles";

export default function LoginScreen() {


  // função para lidar com o login do Usuário
  function handleLogin(){

  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.imgRedonda}
        />
        <TextInput label="Email" placeholder="Digite seu email" />
        <TextInput
          label={"Senha"}
          placeholder={"Digite sua senha"}
          secureTextEntry={true} // faz com que o texto pareça ser uma senha
        />
      </View>
    </View>
  );
}

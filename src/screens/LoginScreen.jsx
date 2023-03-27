import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Image, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import { styles } from "../utils/styles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // função para lidar com o login do Usuário
  function handleLogin() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredencial) => {
        console.log("Usuário logado com sucesso!");
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário", error);
        //código de erro
        const errorCode = error.code;
        if (email === "" || senha === "") {
          console.log("Preencha todos os campos");
          return;
        }
        if (senha.length < 6) {
          console.log("A senha deve ter no mínimo 6 caracteres");
          return;
        }
        if (!email.includes("@")) {
          console.log("E-mail inválido");
          return;
        }
        if (!email.includes(".")) {
          console.log("E-mail inválido");
          return;
        }
        if (email.includes(" ")) {
          console.log("E-mail inválido");
          return;
        }
        if (errorCode === "auth/invalid-email") {
          console.log("E-mail inválido");
        }
        if (errorCode === "auth/user-not-found") {
          console.log("Usuário não encontrado");
        }
        if (errorCode === "auth/wrong-password") {
          console.log("Senha incorreta");
        }
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.imgRedonda}
        />
        <TextInput
          label="Email"
          placeholder="Digite seu email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          label={"Senha"}
          placeholder={"Digite sua senha"}
          onChangeText={setSenha}
          value={senha}
          secureTextEntry={true} // faz com que o texto pareça ser uma senha
        />
        <Button onPress={handleLogin}>Logar</Button>
      </View>
    </View>
  );
}

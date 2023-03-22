import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import { styles } from "../utils/styles";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // função para lidar com o registro do Usuário
  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso!");
        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário!", error);

        // código de erro
        const errorCode = error.code; // auth/weak-password
        // mensagem de erro
        if (errorCode === "auth/weak-password") {
          console.log("Senha muito fraca!");
        }

        if (errorCode === "auth/email-already-in-use") {
          console.log("E-mail já cadastrado!");
        }

        if (errorCode === "auth/invalid-email") {
          console.log("E-mail inválido!");
        }
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph>Realize o seu cadastro {email}</Paragraph>
        <TextInput
          label={"E-mail"}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <TextInput
          label={"Senha"}
          placeholder="Digite sua senha🍐"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
          mode="flat"
        />
        <Button onPress={handleRegister}>Registre-se</Button>
      </View>
    </View>
  );
}

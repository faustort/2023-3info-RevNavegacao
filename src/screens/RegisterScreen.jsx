import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput, Text } from "react-native-paper";
import { auth } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { styles } from "../utils/styles";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);

  // função para lidar com o registro do Usuário
  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso!");
        // Adiciona o usuário no Firestore
        const docRef = addDoc(collection(db, "users"), {
          nome: nome,
          email: email,
          uid: userCredential.user.uid,
          dataDeCadastro: new Date(),
        }).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          navigation.navigate("LoginScreen");
        });
      })
      .catch((error) => {
        console.log("Erro ao criar usuário!", error);
        // código de erro
        const errorCode = error.code; // auth/weak-password
        // mensagem de erro
        if (errorCode === "auth/weak-password") {
          setError("Senha muito fraca!");
        }
        if (errorCode === "auth/email-already-in-use") {
          setError("E-mail já cadastrado!");
        }
        if (errorCode === "auth/invalid-email") {
          setError("E-mail inválido!");
        }
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph>Realize o seu cadastro {email}</Paragraph>

        {error && <Text variant="titleMedium">{error}</Text>}

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

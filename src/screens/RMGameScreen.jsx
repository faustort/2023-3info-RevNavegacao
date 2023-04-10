import { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
    const [personagem, setPersonagem] = useState(null);
    const [personagens, setPersonagens] = useState(0);
    const [totalPersonagens, setTotalPersonagens] = useState(0);

    function buscaPersonagemAleatorio() {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((json) => {
                setTotalPersonagens(json.info.count);
                setPersonagens(json.results);

                const indiceAleatorio = Math.floor(Math.random() * totalPersonagens);
                setPersonagem(personagens[indiceAleatorio])
            })
            .catch((error) => {
                console.error(error);
            });

    }
    return (
        <View style={styles.container}>
            <Text>Personagem: {personagem?.name}</Text>
            <Button onPress={buscaPersonagemAleatorio} > Buscar Personagem </Button>
        </View>
    )

}
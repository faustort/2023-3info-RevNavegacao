import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
    const [personagem, setPersonagem] = useState(null);
    const [personagens, setPersonagens] = useState([]);
    const [totalPersonagens, setTotalPersonagens] = useState(0);


    useEffect(() => {
        retornaTotalDePesonagens();
    }, [])

    function buscaPersonagemAleatorio() {
        fetch('https://rickandmortyapi.com/api/character/' + retornaIndiceAleatorio())
            .then((response) => response.json())
            .then((json) => {
                setPersonagem(json);
            })
    }

    function retornaTotalDePesonagens() {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((json) => {
                setTotalPersonagens(json.info.count);
            });
    }

    function retornaIndiceAleatorio() {
        return Math.floor(Math.random() * totalPersonagens);
    }

    return (
        <View style={styles.container}>
            <Text>Personagem: {personagem?.name}</Text>
            <Button onPress={buscaPersonagemAleatorio} > Buscar Personagem </Button>
        </View>
    )

}
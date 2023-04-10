import { useEffect, useState } from "react";
import { Image, View } from "react-native";
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

    function checkIfPersonagemEstaVivo() {
        if (personagem.status === 'Alive') {
            return true;
        } else {
            return false;
        }
    }

    return (
        <View style={styles.container}>
            <Text>Este personagem está vive?</Text>
            <Image
                source={{ uri: personagem?.image }}
                style={{ width: 200, height: 200 }}
            ></Image>
            <Text>Personagem: {personagem?.name}</Text>
            <View>
                <Button

                >SIM</Button>
                <Button >NÃO</Button>
            </View>


            <Button onPress={buscaPersonagemAleatorio} > Buscar Personagem </Button>
        </View>
    )

}
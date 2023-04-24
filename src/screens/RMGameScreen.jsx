import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Dialog, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
    const [personagem, setPersonagem] = useState(null);
    const [personagens, setPersonagens] = useState([]);
    const [totalPersonagens, setTotalPersonagens] = useState(1);
    const [youAreRight, setYouAreRight] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((json) => {
                setTotalPersonagens(json.info.count);
            })
    }, []);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/' + returnRandomNumber())
            .then((response) => response.json())
            .then((json) => {
                setPersonagem(json);
            })
    }, [totalPersonagens]);

    async function handlePersonagemVivoOuMorto(resposta) {
        // character can be dead, alive or unknown
        const personagemEstaVivo = personagem.status === "Alive";
        if (resposta === personagemEstaVivo) {
            setYouAreRight(true);
            dialogVisible(true);

        } else {
            setYouAreRight(false);
            dialogVisible(true);
        }
    }



    const returnRandomNumber = () => {
        let randomNumber = Math.floor(Math.random() * totalPersonagens) + 1;
        if (randomNumber === 0) {
            return 1;
        }
        return randomNumber;
    }

    const drawNewPersonagem = () => {
        fetch('https://rickandmortyapi.com/api/character/' + returnRandomNumber())
            .then((response) => response.json())
            .then((json) => {
                setPersonagem(json);
            })
    }


    return (
        <View style={styles.container}>
            {dialogVisible
                && (
                    <Dialog visible={true} onDismiss={() => { }}>
                        {youAreRight
                            && (
                                <Dialog.Title>Parabéns!</Dialog.Title>
                            ) || (
                                <Dialog.Title>Que pena!</Dialog.Title>
                            )
                        }
                        <Dialog.Actions>
                            <Button onPress={drawNewPersonagem}>OK</Button>
                        </Dialog.Actions>
                    </Dialog>
                )
            }
            <Text style={styles.title}>Rick and Morty Game</Text>
            <Text style={styles.subtitle}>Você sabe se o personagem está vivo?</Text>
            {personagem && (
                <View>
                    <Image source={{ uri: personagem.image }} style={{ width: 200, height: 200 }} />
                    <Text style={{ fontSize: 32, textAlign: "center", marginVertical: 20 }}>
                        O/a personagem {personagem.name} está vivo/a/e?
                    </Text>
                    <View style={
                        {
                            flexDirection: "row",
                            gap: 20,
                            justifyContent: "center"
                        }
                    }>
                        <Button
                            mode="contained"
                            onPress={() => handlePersonagemVivoOuMorto(true)}
                        >SIM</Button>
                        <Button
                            mode="contained"
                            onPress={() => handlePersonagemVivoOuMorto(false)}
                        >NÃO</Button>
                    </View>
                </View>
            )}
        </View>
    );
}

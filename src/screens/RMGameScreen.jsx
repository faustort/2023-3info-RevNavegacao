import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
    const [personagem, setPersonagem] = useState(null);
    const [personagens, setPersonagens] = useState([]);
    const [totalPersonagens, setTotalPersonagens] = useState(1);

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

    async function handlePersonagemVivo() {
        const isAlive = personagem.status === 'Alive';
        alert(isAlive ? 'Você acertou!' : 'Você errou!');
        fetch('https://rickandmortyapi.com/api/character/' + returnRandomNumber())
            .then((response) => response.json())
            .then((json) => {
                setPersonagem(json);
            })
    }

    const returnRandomNumber = () => {
        let randomNumber = Math.floor(Math.random() * totalPersonagens) + 1;

        // canoot return 0
        if (randomNumber === 0) {
            return 1;
        }
        return randomNumber;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rick and Morty Game</Text>
            <Text style={styles.subtitle}>Você sabe se o personagem está vivo?</Text>
            {personagem && (
                <View>
                    <Image source={{ uri: personagem.image }} style={{ width: 200, height: 200 }} />
                    <Text style={{ fontSize: 32, textAlign: "center", marginVertical: 20 }}>
                        O/a personagem {personagem.name} está vivo/a/e?
                    </Text>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                        <Button mode="contained" onPress={handlePersonagemVivo}>SIM</Button>
                        <Button mode="contained" onPress={() => setPersonagem(null)}>NÃO</Button>
                    </View>
                </View>
            )}
        </View>
    );
}

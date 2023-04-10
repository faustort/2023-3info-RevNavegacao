import { useState } from "react";
import { View } from "react-native";

export default function RMGameScreen() {
    const [personagem, setPersonagem] = useState(null);

    function buscaPersonagemAleatorio() {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((json) => {
                console.log(json.results);
            })
            .catch((error) => {
                console.error(error);
            });

    }


    return (
        <View>

        </View>
    )

}
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { auth } from "../config/firebase";



export default function Logout({ navigation }) {

    // log out from firebase
    useEffect(() => {
        signOut(auth)
            .then(() => {
                console.log("User signed out!");
                navigation.navigate("LoginScreen");
            })
            .catch((error) => {
                console.log("Error signing out: ", error);
            });

    }, [])

    return (
        <View>
            <Text>Saindo</Text>
        </View>
    )

}
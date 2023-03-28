import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function FetchNews() {
  const [data, setData] = useState([]);

  function fetchNewsData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) // transforma a informação em JSON
      .then((json) => console.log(json)) // aqui temos o resultado em JSON
      .catch((error) => console.error(error)); // aqui pegamos o erro
  }
  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Fetch News</Text>
    </View>
  );
}

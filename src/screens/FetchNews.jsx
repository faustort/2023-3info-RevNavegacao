import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function FetchNews() {
  const [data, setData] = useState([]);
  const [nome, setNome] = useState("Rafael");
  function fetchNewsData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) // transforma a informação em JSON
      .then((json) => setData(json)) // aqui temos o resultado em JSON
      .catch((error) => console.error(error)); // aqui pegamos o erro
  }
  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView >
        <Text>Fetch News {nome}</Text>
        {data.map((item) => (
          <View key={item.id}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

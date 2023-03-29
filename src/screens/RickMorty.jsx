import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RickMorty() {
  const [data, setData] = useState([]);

  useEffect(() => {

    // buscar, requerer as informações externas
    fetch("https://rickandmortyapi.com/api/character")
      // essas informações chegam via promessa
      // vamos tentar converte-las em Json
      .then((data) => data.json())
      // depois eu vou preencher, popular a variável data
      .then((dataJson) => setData(dataJson.results))
      // caso ocorra erros eu mostro o erro no console
      .catch((error) => {
        console.log(error);
      })

  }, [])


  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item) => (
          <Card key={item.name}>
            <Card.Title>{item.name}</Card.Title>
            <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>Está vivo? {item.status}</Paragraph>
              {item.episode.map((episode) => (
                <Paragraph key={episode}>{episode}</Paragraph>
              ))}
            </Card.Content>
            <Card.Cover source={{ uri: item.image }} />
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

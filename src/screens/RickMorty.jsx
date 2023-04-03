import { useEffect, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { Card, Paragraph, Title, ToggleButton, Text } from "react-native-paper";
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
    <View style={styles.containerFullWidth}>
      <View>
        <Text>Menu</Text>
        <ToggleButton
          icon="bluetooth"
          value="bluetooth"
          status={this.state.status}
          // onPress={value =>
          //   this.setState({
          //     status: value === 'checked' ? 'unchecked' : 'checked',
          //   })
          // }
        />
      </View>
      <ScrollView style={styles.widthFull}>
        <View style={{ ...styles.container, ...styles.widthFull }}>
          {data.map((item) => (
            <Card style={{ ...styles.widthFull, marginBottom: 20 }} key={item.name}>
              <Card.Title>{item.name}</Card.Title>
              <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>Está vivo? {item.status}</Paragraph>
                {/* {item.episode.map((episode) => (
                <Paragraph key={episode}>{episode}</Paragraph>
              ))} */}
              </Card.Content>
              <Card.Cover source={{ uri: item.image }} />
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>

  );
}

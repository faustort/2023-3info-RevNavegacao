import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Card, Paragraph, Title, Text, Button } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RickMorty() {
  // Resposável por receber os dados do JSON
  const [data, setData] = useState([]);
  
  // Esta variável representa o filtro de busca
  const [buscaBt, setBuscaBt] = useState({
    // gender pra filtrar por gênero
    gender: "",
    // status pra filtrar por vivo ou morto
    status: ""
  })

  useEffect(() => {
    // construir a URL da API com base nas opções de busca
    const apiUrl = `https://rickandmortyapi.com/api/character?${buscaBt.status}${buscaBt.gender}`;

    // buscar, requerer as informações externas
    fetch(apiUrl)
      // essas informações chegam via promessa
      // vamos tentar converte-las em Json
      .then((data) => data.json())
      // depois eu vou preencher, popular a variável data
      .then((dataJson) => setData(dataJson.results))
      // caso ocorra erros eu mostro o erro no console
      .catch((error) => {
        console.log(error);
      })
  }, [buscaBt.status, buscaBt.gender]);

  const handleStatusFilter = (status) => {
    setBuscaBt({
      ...buscaBt,
      status: `&status=${status}`
    });
  };

  const handleGenderFilter = (gender) => {
    setBuscaBt({
      ...buscaBt,
      gender: `&gender=${gender}`
    });
  };

  return (
    <View style={styles.containerFullWidth}>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Status do personagem: </Text>
          <Button
            onPress={() => handleStatusFilter("alive")}
          >Vivo</Button>
          <Button
            onPress={() => handleStatusFilter("dead")}
          >Morto</Button>
          <Button
            onPress={() => handleStatusFilter("unknown")}
          >Desconhecido</Button>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Gênero: </Text>
          <Button
            onPress={() => handleGenderFilter("male")}
          >Masculino</Button>
          <Button
            onPress={() => handleGenderFilter("female")}
          >Feminino</Button>
          <Button
            onPress={() => handleGenderFilter("genderless")}
          >Sem Gênero</Button>
          <Button
            onPress={() => handleGenderFilter("unknown")}

          >Desconhecido</Button>
        </View>
      </View>
      <ScrollView style={styles.widthFull}>
        <View style={{ ...styles.container, ...styles.widthFull }}>
          {data.map((item) => (
            <Card style={{ ...styles.widthFull, marginBottom: 20 }} key={item.id}>
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

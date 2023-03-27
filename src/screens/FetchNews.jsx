import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function FetchNews() {
  function fetchNewsData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <View>
      <Text>Fetch News</Text>
    </View>
  );
}

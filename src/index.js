import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FetchNews from "./screens/FetchNews";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RickMorty from "./screens/RickMorty";
import SplashScreen from "./screens/SplashScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RMGameScreen from "./screens/RMGameScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator initialRouteName="HomeScreen">
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tabs.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="login" color={color} size={26} />
          )
        }}
      />
      <Tabs.Screen
        name="RMGame"
        component={RMGameScreen}
        options={{
          tabBarLabel: "Jogo",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gamepad-variant" color={color} size={26} />
          )
        }}
      />
      <Tabs.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          tabBarLabel: "Registro",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-plus" color={color} size={26} />
          )
        }}
      />
      <Tabs.Screen
        name="FetchNews"
        component={FetchNews}
        options={{
          tabBarLabel: "Notícias",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={26} />
          )
        }}
      />
      <Tabs.Screen
        name="RickMorty"
        component={RickMorty}
        options={{
          tabBarLabel: "Rick & Morty",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="alien" color={color} size={26} />
          )
        }}
      />
    </Tabs.Navigator>
  );
}

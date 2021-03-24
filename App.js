import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home'
import Explore from './screens/Explore'
import BarcodeScanner from './screens/BarcodeScanner'
import ScannedItem from './screens/ScannedItem'
import Setting from './screens/Setting'

import { Container, Header, Left, Body, Right, Button, Icon, Title, Card } from 'native-base';


function HomeScreen({ navigation }) {
  return (
    <Container>
      <Header>

        <Body>
          <Title>Home</Title>
        </Body>

      </Header>
      <Home navigation={navigation} />
    </Container>
  );
}

function ExploreScreen({ navigation }) {
  return (
    <Container>
      <Header>
        <Left>

        </Left>
        <Body>
          <Title>Explore</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => { navigation.navigate('Setting') }}>
            <Icon name='menu' style={{ color: '#f9aa33' }} />
          </Button>

        </Right>
      </Header>
      < Explore />
    </Container>
  );
}

function BarcodeScreen() {
  return (
    <BarcodeScanner />
  )
}

function SettingScreen({navigation}) {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => { navigation.goBack() }}>
            <Icon name='arrow-back' style={{ color: '#f9aa33' }} />
          </Button>
        </Left>
        <Body>
          <Title>Setting</Title>
        </Body>
        <Right>


        </Right>
      </Header>
      < Setting />
    </Container>
  )
}

function ScannedItemScreen({ navigation }) {
  return (
    <Container>
      <Header>

        <Body>
          <Title>VH Teriyaki Sauce</Title>
        </Body>

      </Header>
      <ScannedItem navigation={navigation} />
    </Container>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#f9aa33',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
    </Tab.Navigator>
  )
}




const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Tab" screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="BarcodeScanner" component={BarcodeScreen} />
        <Stack.Screen name="ScannedItem" component={ScannedItemScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
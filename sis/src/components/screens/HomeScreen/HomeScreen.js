import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import Expo from 'expo'

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Container style={{paddingTop: Expo.Constants.statusBarHeight}}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home Screen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("News")}>
            <Text>Goto NewsFeed Here</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
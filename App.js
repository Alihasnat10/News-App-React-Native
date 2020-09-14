import React, {Component} from 'react';
import {Text} from 'react-native';
import TabScreen from './TabScreens';
import {Root} from 'native-base';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Contact from './Contact.js';
const Drawer = createDrawerNavigator();


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
 
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    } else {
      return (
        <Root>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="TabScreen" component={TabScreen} />
              <Drawer.Screen name="Contact" component={Contact} />
            </Drawer.Navigator>
          </NavigationContainer>
        </Root>
      );
    }
  }

}

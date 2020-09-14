import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#0ba4f4'}} hasTabs>
            <Left/>
          <Body>
            <Title style={{color:'white', fontWeight:'bold'}}>News App</Title>
          </Body>
          <Right />
        </Header>
        
        <Tabs tabBarUnderlineStyle={{backgroundColor:'darkblue'}}>
          <Tab tabStyle={{backgroundColor:'#0ba4f4'}} activeTabStyle={{backgroundColor:'#0ba4f4'}}
               textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#0ba4f4'}} activeTabStyle={{backgroundColor:'#0ba4f4'}} 
               textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#0ba4f4'}} activeTabStyle={{backgroundColor:'#0ba4f4'}}
               textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
        
      </Container>
    );
  }
}


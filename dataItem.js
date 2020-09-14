import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import { ListItem, Left, Right, Thumbnail, Body,Button } from 'native-base';
import TimeAgo from './time';

class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url, title});
    }

    render() {
        return(
          <View style={styles.card}>
            <Image style={styles.image} source={{
                height: 300,
                width: 300,
                uri: this.data.urlToImage != null ? this.data.urlToImage : 'http://placeimg.com/640/480/food'
            }} /> 
            <Text style={styles.title} numberOfLines = {2}>{this.data.title}</Text>
            <Text style={styles.content} numberOfLines = {3}>{this.data.description}</Text>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                <Text note>{this.data.source.name}</Text>
                <TimeAgo time={this.data.publishedAt}/>
            </View>
            <Button style ={styles.btn} transparent onPress={this.handlePress}>
              <Text>Read More</Text>
            </Button>
          </View>


        );
    }
}

export default DataItem;
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginTop: 6,
    fontWeight: "bold",
  },
  content: {
    fontSize: 17,
    padding: 10,
  },
  image: {
    padding: 10,
    borderRadius: 20,
  },
  card: {
    backgroundColor: "#0ba4f4",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn:{
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 30,
    color: '#0ba4f4'
  }
});

/*
<ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'http://placeimg.com/640/480/food' }} />
              </Left>
              <Body>
                <Text numberOfLines={2}>{this.data.title}</Text>
                <Text note numberOfLines={2}>{this.data.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>{this.data.source.name}</Text>
                    <TimeAgo time={this.data.publishedAt}/>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={this.handlePress}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>*/
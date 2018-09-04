import React, { Component } from "react";
import { Image, StyleSheet, NavigatorIOS, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Card, CardItem, Text, Body, StyleProvider, View, Left, Right, Button, Icon } from 'native-base';

export class PostItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyleProvider style={cardTheme}>
      <TouchableOpacity onPress={() => {this.props.navigation.navigate('Post', {post: this.props.item})}} activeOpacity={.5}>
        <Card 
          customStyleProp
        >
          <CardItem cardBody>
          <View style={{
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              overflow: 'hidden',
              height: 170,
              position: 'relative'
            }}>
              <Image source={{uri: this.props.img }} style={{height: 200, width: null, flex: 1,  resizeMode: 'cover' }}/>
              <CardItem locationStyleProp style= {{
                borderRadius: 15,
                overflow: 'hidden',
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: "#4b7bec",
                position: 'absolute',
                bottom: 10,
                left: 10
              }}
                >
                  <Text style={{color: "#FFF"}}>East Village, NY</Text>
              </CardItem>
          </View>
          </CardItem>
          <Content customStyleProp>
            <CardItem customStyleProp>
              <Body>
                <Text style={{fontWeight: 'bold', color: "#4b4b4b", marginBottom: 15, fontSize: 26}}>{this.props.title}</Text>
                <Text style={{fontWeight: 'bold', color: "#d1d8e0", fontSize: 16, marginBottom: 7}}>Description</Text>
                <Text customStyleText>
                  {this.props.content}
                </Text>
              </Body>
            </CardItem>
            <CardItem customStyleProp>
              <Left>
                <Button transparent customStyleProp>
                  <Ionicons name="md-star" size={25} color="#fed330" />
                  <Text style={{fontWeight: 'bold', marginLeft: 6, color: "#fed330", fontSize: 16}}>12</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent customStyleProp>
                  <Text style={{fontWeight: 'bold', color: "#26de81", fontSize: 16}}>$5</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent customStyleProp>
                  <Ionicons name="md-add" size={25} color="#3867d6"/>
                </Button>
              </Right>
            </CardItem>
          </Content>
        </Card>
        </TouchableOpacity>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  imageBorder: {
    borderRadius: 4
  },
});

const cardTheme = {
  'NativeBase.Card' : {
    '.customStyleProp': {
      borderRadius: 4,
      backgroundColor: '#FFF',
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.15,
      shadowRadius: 6,
    }
  },
  'NativeBase.Content': {
    '.customStyleProp': {
      overflow: 'hidden',
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
      padding: 10
    }
  },
  'NativeBase.CardItem': {
    '.customStyleProp': {
      flex: 1,
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 10
    }
  },
  'NativeBase.Text' : {
    '.customStyleText': {
      fontSize: 16
    }
  },
  'NativeBase.Button' :{
    '.customStyleProp': {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  }
}
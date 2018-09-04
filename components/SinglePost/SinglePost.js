import React, { Component } from "react";
import { Image, StyleSheet, NavigatorIOS, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Card, CardItem, Text, Body, StyleProvider, View, Left, Right, Button, Icon } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { MapView } from 'expo';

export class SinglePost extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation.state.params.post.img)
    return (
      <Container>
        <Header style={{backgroundColor: "#26de81", borderBottomColor: "transparent", paddingLeft: 20}}>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.goBack()}}>
              <Ionicons name="ios-arrow-back" size={30} color="#FFF"></Ionicons>
            </Button>
          </Left>
          <Body>
            <Text style={{color: "#FFF", fontWeight: "bold"}}>{this.props.navigation.state.params.post.title}</Text>
          </Body>
          <Right/>
        </Header>
      <SafeAreaView>
         <StatusBar
          barStyle="dark-content"
          backgroundColor="#FFF"
          />
        <StyleProvider style={cardTheme}>
        <ScrollView 
        style={{
          backgroundColor: '#FFF',
          minHeight: '100%'
        }}>
            <View style={{
                height: 250,
                position: 'relative'
              }}>
                <Image source={{uri: this.props.navigation.state.params.post.img }} style={{height: 200, width: null, flex: 1,  resizeMode: 'cover' }}/>
                <View style={{
                  display: "flex", 
                  flexDirection: 'row',
                  justifyContent: 'center', 
                  position: 'absolute',
                  flex: 1,
                  width: "100%",
                  left: 0,
                  bottom: -85,
                  shadowColor: "#000",
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 0.15,
                  shadowRadius: 6,
                  borderRadius: 5,
                }}>
                <View style={{ 
                  flex: 1, 
                  minHeight: 170, 
                  maxWidth: '85%', 
                  borderRadius: 5, 
                  overflow: "hidden",
                }}>
                  <MapView
                    style={styles.map}
                    initialRegion={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                  />
                </View>
              </View>
            </View>
            <Content scrollEnabled={false}>
              <Card>
                <CardItem customStyleProp style={{marginTop: 105, paddingLeft: 20, paddingRight: 20}}>
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
                <CardItem style={{padding: 20}}>
                  <Text style={{fontWeight: 'bold', color: "#4b4b4b", marginBottom: 15, fontSize: 26}}>{this.props.navigation.state.params.post.title}</Text>
                  <Text style={{fontWeight: 'bold', color: "#d1d8e0", fontSize: 16, marginBottom: 7}}>Description</Text>
                  <Text customStyleText>
                    {this.props.navigation.state.params.post.content}
                  </Text>
                </CardItem>
              </Card>
             </Content>
          </ScrollView>
        </StyleProvider>
      </SafeAreaView>
      </Container>
    );
  }
}

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
  'NativeBase.CardItem': {
    '.customStyleProp': {
      flex: 1,
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 10
    }
  },
  'NativeBase.Button' :{
    '.customStyleProp': {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  'NativeBase.Text' : {
    '.customStyleText': {
      fontSize: 16
    }
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject,
  },
});
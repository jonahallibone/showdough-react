import React from 'react';
import {Button, NavigatorIOS, View, Text, FlatList, Image} from 'react-native';
import { PostItem } from '../PostItem/PostItem';
import { Container, Header, Content, Left, Body, Right, Title } from "native-base";

export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: "Wine Tasting!",
          content: "On September 24th, please come try some wine and have a great time!",
          index: 0,
          img: 'https://d2azv234xtg0bl.cloudfront.net/wp-content/uploads/2016/03/winepour-e1457507312788-696x509.jpg'
        },
        {
          title: "Jewlery Showcase",
          content: "On September 24th, please come try some wine and have a great time!",
          index: 1,
          img: 'https://d2azv234xtg0bl.cloudfront.net/wp-content/uploads/2016/03/winepour-e1457507312788-696x509.jpg'
        },
        {
          title: "Food!",
          content: "On September 24th, please come try some wine and have a great time!",
          index: 2,
          img: 'https://d2azv234xtg0bl.cloudfront.net/wp-content/uploads/2016/03/winepour-e1457507312788-696x509.jpg'
        }
      ]
    };

  }

  _keyExtractor = (item, index) => item.index;

  _renderItem = ({item}) => (
    <PostItem
      id={item.id}
      onPressItem={this._onPressItem}
      title={item.title}
      content={item.content}
      img={item.img}
      item={item}
      navigation = {this.props.navigation}
    />
  );

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={{backgroundColor: "#26de81", borderBottomColor: 'transparent'}}>
          <Left/>
          <Body>
            <Title style={{color: "#FFF"}}>Events</Title>
          </Body>
          <Right/>
        </Header>
        <Content style={{padding: 20}}>
          <FlatList
            data={this.state.posts}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={{overflow: 'visible', paddingBottom: 20}}
          />
        </Content>
      </Container>
    );
  }
}
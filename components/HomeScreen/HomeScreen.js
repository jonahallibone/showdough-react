import React from 'react';
import {Button, NavigatorIOS, View, Text, FlatList, Image} from 'react-native';
import { PostItem } from '../PostItem/PostItem';


export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: "Test Post!",
          index: 0
        },
        {
          title: "Test Post!",
          index: 1
        },
        {
          title: "Test Post!",
          index: 2
        }
      ]
    };

  }

  _keyExtractor = (item, index) => item.index;

  _renderItem = ({item}) => (
    <PostItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlatList
        data={this.state.posts}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    );
  }
}